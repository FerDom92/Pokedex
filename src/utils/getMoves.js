import { pokeApi } from "src/boot/axios";

const capitalizeName = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

const getTypeOfMove = async (type) => {
  try {
    const { data } = await pokeApi(`/move/${type}`);
    return capitalizeName(data.type.name);
  } catch (error) {
    console.log(error);
  }
};

export const getMoves = async (moves) => {
  const allMoves = [];

  for (let index = 0; index < moves.length; index++) {
    const data = {
      name: capitalizeName(moves[index].move.name.replace("-", " ")),
      type: await getTypeOfMove(
        moves[index].move.url.split("/").slice(-2, -1)[0]
      ),
    };
    allMoves.push(data);
  }

  return allMoves;
};
