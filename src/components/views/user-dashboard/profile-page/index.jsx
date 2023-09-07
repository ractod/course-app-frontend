"use client";
import DotsLoading from "@components/elements/DotsLoading";
import AvatarBanner from "./AvatarBanner";
import UserProfile from "./UserProfile";

import useUser from "@hooks/useUser";

const UserProfilePage = () => {
  const { loading } = useUser();

  if (loading) {
    return (
      <main className="h-screen flex-1">
        <DotsLoading />
      </main>
    );
  }

  return (
    <main className="container px-5 py-10">
      <AvatarBanner />
      <UserProfile />
    </main>
  );
};

export default UserProfilePage;
