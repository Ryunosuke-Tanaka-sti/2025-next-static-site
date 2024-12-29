"use client";

import useSWR from "swr";

import { fetchProfile } from "@/service/profile/api";

export const UserProfile = () => {
  const { data, isLoading } = useSWR("userProfile", fetchProfile);
  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>Failed to load</div>;
  return (
    <>
      {data.userID}:{data.userName}
    </>
  );
};
