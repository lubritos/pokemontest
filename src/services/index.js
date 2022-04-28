import axios from "axios";

const axiosBase = axios.create({
  baseURL: "https://www.pokemon.com/us/api/",
  responseType: "json"
});
export default axiosBase;
