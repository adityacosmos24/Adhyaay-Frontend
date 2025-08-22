import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, // ✅ use import.meta.env
  withCredentials: true,
});
