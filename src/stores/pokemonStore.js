import { defineStore } from "pinia";
import { getPokemons } from "src/services/getPokemons";

export const usePokemonStore = defineStore("pokemons", {
  state: () => ({
    pokemons: [],
    pokemonSelected: null,
    filterIsOpen: false,
  }),
  getters: {},
  actions: {
    async getData(current) {
      const data = await getPokemons(current);

      if (data) {
        this.pokemons = data.slice(current, current + 5);
      }
    },
    openAndCloseFilter() {
      this.filterIsOpen = !this.filterIsOpen;
    },
    pokemonsFiltered(pokemons) {
      this.pokemons = pokemons;
    },
  },
});
