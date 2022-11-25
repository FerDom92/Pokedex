<template>
  <q-page class="background">
    <div class="pokeball-background" />
    <div class="blue-background" />

    <div class="container">
      <div class="column q-px-md q-pt-md">
        <TitleH2
          text="What pokemon are you looking for?"
          style="width: 275px"
          class="text-white"
        />

        <div class="row items-center justify-between">
          <q-input
            v-model="pokemonToSearch"
            label="Search pokemon"
            label-color="white"
            dark
            style="width: 70vw"
          >
            <template v-slot:append>
              <q-icon
                name="search"
                size="sm"
                color="white"
                @click="searchPokemon()"
              />
            </template>
          </q-input>

          <q-icon
            name="tune"
            size="md"
            color="white"
            class="q-mr-md cursor-pointer"
            @click="showFilter()"
          />

          <transition
            appear
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeIn"
            v-if="filterIsOpen"
          >
            <FilterForm></FilterForm>
          </transition>
        </div>
      </div>
    </div>

    <div class="q-py-xl">
      <div class="resultados">
        <SubTitleSecondary
          :text="`${pokemons.length} resultados`"
          class="row items-center q-pl-md"
          style="color: #55596d"
        />
      </div>

      <PokemonList :pokemons="pokemons" />
    </div>

    <div class="q-pa-lg flex flex-center bg-white">
      <q-pagination
        v-model="current"
        :min="1"
        :max="200"
        max-pages="5"
        boundary-numbers
        gutter="10px"
        direction-links
      />
    </div>
  </q-page>
</template>

<script>
import { pokeApi } from "src/boot/axios";
import { usePokemonStore } from "src/stores/pokemonStore";
import { mapState, mapActions } from "pinia";

import { SubTitleSecondary, TitleH2 } from "src/components/ui/text";
import PokemonList from "../components/PokemonList.vue";
import FilterForm from "../components/FilterForm.vue";

export default {
  name: "HomePage",
  components: {
    TitleH2,
    PokemonList,
    FilterForm,
    SubTitleSecondary,
  },
  data() {
    return {
      current: 1,
      pokemonToSearch: "",
    };
  },
  watch: {
    current: {
      handler: "changePage",
    },
  },
  mounted() {
    this.getData(this.current - 1);
  },
  computed: {
    ...mapState(usePokemonStore, ["pokemons", "filterIsOpen"]),
  },
  methods: {
    ...mapActions(usePokemonStore, [
      "getData",
      "openAndCloseFilter",
      "pokemonsFiltered",
    ]),
    changePage() {
      this.$router.push(`/${this.current}`);
      this.getData(this.current * ((this.current * 5) / this.current) - 5);
    },
    showFilter() {
      this.openAndCloseFilter();
    },
    async searchPokemon() {
      if (this.pokemonToSearch.length == 0) {
        this.getData(this.current - 1);
      } else {
        try {
          const { data } = await pokeApi(
            `/pokemon/${this.pokemonToSearch.toLocaleLowerCase()}`
          );

          this.pokemonsFiltered([data]);
        } catch (error) {
          console.log(error);
          this.pokemonsFiltered([]);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.background {
  background: $neutro4;
}

.container {
  position: relative;
  padding-top: 70px;
}

.pokeball-background {
  background: url("../assets/pokeball-background.png") no-repeat;
  background-position: right;
  height: 234px;
  position: absolute;
  width: 100%;
}

.blue-background {
  height: 234px;
  top: 0;
  left: 0;
  width: 100%;
  position: absolute;
  background-color: rgb(0, 0, 153);
  opacity: 0.9;
  z-index: 0;
}

.resultados {
  background: #fcfcfc;
  display: flex;
  height: 48px;
  width: 92%;
  margin: 20px auto 30px auto;
  border-radius: 8px;
}
</style>
