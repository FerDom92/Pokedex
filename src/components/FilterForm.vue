<template>
  <q-page class="bg-white filter-page">
    <Icon name="close" class="q-mt-xl q-ml-md" @click="openAndCloseFilter()" />
    <TitleH2 text="Filtrer pokemon list" class="q-mt-lg q-mb-xl q-ml-md" />

    <q-form class="q-gutter-md q-px-md">
      <q-input filled type="number" v-model="movementToSearch" label="Type movement number" />

      <q-input filled type="number" v-model="experienceToSearch" label="Type the experience level" />

      <div style="min-width: 250px">

        <q-select filled v-model="optionSelected" multiple :options="options" use-chips stack-label
          label="Pokemon Type">
          <template v-slot:opt>
            <q-chip>{{ opt }}</q-chip>
          </template>
        </q-select>

      </div>

      <div class="button-wrapper">
        <ButtonSecondary text="Cancel" class="button-seccondary" @click="openAndCloseFilter()" />
        <ButtonPrimary text="Filter" @click="filterData()" />
      </div>
    </q-form>
  </q-page>
</template>

<script>

import axios from 'axios'
import { mapActions } from 'pinia';
import { usePokemonStore } from 'src/stores/pokemonStore';

import Icon from 'src/components/ui/Icon.vue';
import ButtonPrimary from './ui/buttons/ButtonPrimary.vue';
import ButtonSecondary from './ui/buttons/ButtonSecondary.vue';
import TitleH2 from './ui/text/TitleH2.vue';

export default {
  name: 'FilterForm',
  components: {
    Icon,
    TitleH2,
    ButtonPrimary,
    ButtonSecondary
  },
  data() {
    return {
      movementToSearch: null,
      experienceToSearch: null,
      optionSelected: [],
      options: [
        'Grass',
        'Poison',
        'Bug',
        'Dark',
        'Dragon',
        'Electric',
        'Fairy',
        'Fighting',
        'Fire',
        'Flying',
        'Ghost',
        'Ground',
        'Ice',
        'Normal',
        'Psychic',
        'Rock',
        'Stell',
        'Water',
      ],
    }
  },

  methods: {
    ...mapActions(usePokemonStore, ['openAndCloseFilter', 'pokemonsFiltered']),
    async filterData() {
      this.$q.loading.show()
      const pokemonsToShow = []

      const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')

      for (let index = 0; index < data.results.length; index++) {

        const dataPokemon = await axios.get(data.results[index].url)

        const exists = this.optionSelected.filter(elem => elem.toLowerCase() === dataPokemon.data.types[0].type.name);

        if (
          dataPokemon.data.moves.length == this.movementToSearch ||
          dataPokemon.data.base_experience == this.experienceToSearch ||
          exists.length
        ) {
          pokemonsToShow.push(dataPokemon.data)
        }
      }
      this.pokemonsFiltered(pokemonsToShow)
      this.$q.loading.hide()
      this.openAndCloseFilter()
    },
  }
}
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
  background: #D0D7F9;
}

.chip {
  padding: 5px;
  background: red;
}
</style>
