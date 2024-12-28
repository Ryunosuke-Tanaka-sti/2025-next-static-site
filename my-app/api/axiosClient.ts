import axios from "axios";

export const axiosClient = axios.create({
  timeout: 2000,
  headers: {
    "Content-Type": "application/json",
  },
});
