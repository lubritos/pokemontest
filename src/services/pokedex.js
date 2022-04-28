import axiosBase from ".";

const pokedex = {
  get: () => axiosBase.get("pokedex/kalos")
};
export default pokedex;
