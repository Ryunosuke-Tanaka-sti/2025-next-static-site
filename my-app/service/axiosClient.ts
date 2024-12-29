import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "/",
  timeout: 2000,
  headers: {
    "Content-Type": "application/json",
  },
});
