import axios from "axios";
import { pokeApi } from "src/boot/axios";

const capitalizeName = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

const getTypeOfMove = async (type) => {
  try {
    const { data } = await axios.get(type);
    return capitalizeName(data.name);
  } catch (error) {
    console.log(error);
  }
};

export const getMoves = async (moves) => {
  const allPromises = [];
  const allMoves = [];

  for (let index = 0; index < moves.length; index++) {
    const prom = new Promise((resolve) => {
      const data = axios.get(moves[index].move.url);

      resolve(data);
    });

    allPromises.push(prom);
  }

  await Promise.allSettled(allPromises).then((resp) => {
    resp.forEach(async (item) => {
      allMoves.push({
        name: capitalizeName(item.value.data.name).replace("-", " "),
        type: await getTypeOfMove(item.value.data.type.url),
      });
    });
  });

  return allMoves;
};
