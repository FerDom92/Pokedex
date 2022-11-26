<template>
  <q-page class="bg-white filter-page">
    <Icon name="close" class="q-mt-xl q-ml-md" @click="openAndCloseFilter()" />
    <TitleH2 text="Filtrer pokemon list" class="q-mt-lg q-mb-xl q-ml-md" />

    <q-form class="q-gutter-md q-px-md">
      <q-input
        filled
        type="number"
        v-model="movementToSearch"
        label="Type movement number"
      />

      <q-input
        filled
        type="number"
        v-model="experienceToSearch"
        label="Type the experience level"
      />

      <div style="min-width: 250px">
        <q-select
          filled
          v-model="optionSelected"
          multiple
          :options="options"
          use-chips
          stack-label
          label="Pokemon Type"
        >
          <template v-slot:opt>
            <q-chip>{{ opt }}</q-chip>
          </template>
        </q-select>
      </div>

      <div class="button-wrapper">
        <ButtonSecondary
          text="Cancel"
          class="button-seccondary"
          @click="openAndCloseFilter()"
        />
        <ButtonPrimary text="Filter" @click="filterData()" />
      </div>
    </q-form>
  </q-page>
</template>

<script>
import axios from "axios";
import { mapActions } from "pinia";
import { usePokemonStore } from "src/stores/pokemonStore";

import Icon from "src/components/ui/Icon.vue";
import ButtonPrimary from "./ui/buttons/ButtonPrimary.vue";
import ButtonSecondary from "./ui/buttons/ButtonSecondary.vue";
import TitleH2 from "./ui/text/TitleH2.vue";

export default {
  name: "FilterForm",
  components: {
    Icon,
    TitleH2,
    ButtonPrimary,
    ButtonSecondary,
  },
  data() {
    return {
      movementToSearch: null,
      experienceToSearch: null,
      optionSelected: [],
      options: [
        "Grass",
        "Poison",
        "Bug",
        "Dark",
        "Dragon",
        "Electric",
        "Fairy",
        "Fighting",
        "Fire",
        "Flying",
        "Ghost",
        "Ground",
        "Ice",
        "Normal",
        "Psychic",
        "Rock",
        "Stell",
        "Water",
      ],
    };
  },

  methods: {
    ...mapActions(usePokemonStore, [
      "openAndCloseFilter",
      "pokemonsFiltered",
      "isLoading",
    ]),
    async filterData() {
      this.$q.loading.show();
      this.isLoading(true);
      const pokemonsToShow = [];
      const allPromises = [];

      const { data } = await axios.get(
        `${process.env.API.ENDPOINT_POKEMON_BASE}/pokemon?limit=200`
      );

      for (let index = 0; index < data.results.length; index++) {
        const dataPokemon = new Promise((resolve) => {
          resolve(axios.get(data.results[index].url));
        });

        allPromises.push(dataPokemon);
      }

      await Promise.allSettled(allPromises)
        .then((resp) => {
          for (let index = 0; index < resp.length; index++) {
            if (resp[index].status === "fulfilled") {
              const exists = this.optionSelected.filter(
                (elem) =>
                  elem.toLowerCase() ===
                  resp[index].value.data.types[0].type.name
              );

              if (
                resp[index].value.data.base_experience ==
                  this.experienceToSearch ||
                resp[index].value.data.moves.length == this.movementToSearch ||
                exists.length
              ) {
                pokemonsToShow.push(resp[index].value.data);
              }
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });

      this.pokemonsFiltered(pokemonsToShow);
      this.$q.loading.hide();
      this.openAndCloseFilter();
    },
  },
};
</script>

<style lang="scss" scoped>
.filter-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
}

.button-wrapper {
  position: fixed;
  top: 90%;
  display: flex;
  gap: 16px;
  left: calc(50vw - 180px);
}

.button-seccondary {
  background: #d0d7f9;
}

.chip {
  padding: 5px;
  background: red;
}
</style>
