import axios from "axios";

const api = axios.create({
  baseURL: "https://amazon-api.sellead.com/country",
});

export default api;