import axios from "axios";

const api = axios.create({
  baseURL: "https://hamburgueria-kenzie.herokuapp.com",
});

export default api;
