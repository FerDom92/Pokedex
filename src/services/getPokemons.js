import { pokeApi } from "src/boot/axios";

let loadedPokemonsId = [];
let loadedPokemonsData = [];

export const getPokemons = async (current) => {
  const idList = [];

  try {
    const amountPokemons = await pokeApi.get(
      `/pokemon/?offset=${current}&limit=20`
    );

    amountPokemons.data.results.forEach((item) => {
      const id = item.url.split("/").slice(-2, -1)[0];

      const isLoaded = loadedPokemonsId.indexOf(id);

      if (isLoaded == -1) {
        idList.push(id);
        loadedPokemonsId.push(id);
      }
    });
  } catch (error) {
    console.log(error);
  }

  for (let index = 0; index < loadedPokemonsId.length; index++) {
    const isLoaded = loadedPokemonsId.indexOf(idList[index]);

    if (isLoaded !== -1) {
      const { data } = await pokeApi(`/pokemon/${idList[index]}`);
      loadedPokemonsData.push(data);
    }
  }
  return loadedPokemonsData;
};
