import { axiosClient } from "../axiosClient";

export const fetchProfile = async () => {
  const response = await axiosClient.get("/.auth/me");
  return response.data;
};
