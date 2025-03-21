import { UserProfileType } from "@/types/userProfile";

import { axiosClient } from "../axiosClient";
import { ClientPrincipalType } from "./type";

export const fetchProfile = async () => {
  // const _response = await fetch("/.auth/me");
  // const _responseJson = await _response.json();
  // return _responseJson;
  const _response = await axiosClient.get<ClientPrincipalType>(`/.auth/me`);
  const resposneData: UserProfileType = {
    userID: _response.data.clientPrincipal.userId,
    userName:
      _response.data.clientPrincipal.claims?.find(
        (claim) => claim.typ === "name"
      )?.val || "",
  };

  return resposneData;
};
