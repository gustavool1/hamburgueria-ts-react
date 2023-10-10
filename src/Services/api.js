import axios from "axios";

const api = axios.create({
  baseURL: "https://hamburgueria-e1qh.onrender.com",
});

export default api;
