import axios from "axios";

export const easyTurnosApi = axios.create({
  baseURL: import.meta.env.VITE_EASY_TURNOS_URL,
  withCredentials: true,
});