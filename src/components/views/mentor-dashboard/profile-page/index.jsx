"use client";
import DotsLoading from "@components/elements/DotsLoading";
import MentorProfile from "./MentorProfile";
import MentorSocialMedias from "./MentorSocialMedias";

import useUser from "@hooks/useUser";

const MentorProfilePage = () => {
  const { loading } = useUser();

  if (loading) {
    return (
      <main className="h-screen flex-1">
        <DotsLoading />
      </main>
    );
  }

  return (
    <main className="container py-10 px-5">
      <h2 className="text-lg text-mute font-black md:text-xl lg:text-2xl">
        پروفایل
      </h2>
      <MentorProfile />
      <MentorSocialMedias />
    </main>
  );
};

export default MentorProfilePage;
