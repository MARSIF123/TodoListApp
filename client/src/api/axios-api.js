import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "https://todo-list-app-api-ecru.vercel.app/api",
});

export default api;
