import { axiosClient } from "../axiosClient";

import type { ClientPrincipalType } from "./type";
import type { UserProfileType } from "@/types/userProfile";

export const fetchProfile = async () => {
  const _response = await axiosClient.get<ClientPrincipalType>("/.auth/me");

  const resposneData: UserProfileType = {
    userID: _response.data.clientPrincipal.userId,
    userName:
      _response.data.clientPrincipal.claims?.find(
        (claim) => claim.typ === "name"
      )?.val || "",
  };

  return resposneData;
};
