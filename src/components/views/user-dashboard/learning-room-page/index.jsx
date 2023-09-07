"use client";
import { useState } from "react";

import DotsLoading from "@components/elements/DotsLoading";
import When from "@components/elements/When";
import CoursePlaylist from "./CoursePlaylist";
import CoursesOverview from "./CoursesOverview";

import useUser from "@hooks/useUser";

const UserLearningRoomPage = () => {
  const { loading } = useUser();
  const [selectedCourse, setSelectedCourse] = useState(null);

  if (loading) {
    return (
      <main className="h-screen flex-1">
        <DotsLoading />
      </main>
    );
  }

  return (
    <main className="container px-5 py-10 2xl:px-20">
      <When truthy={!!selectedCourse}>
        <CoursePlaylist
          selectedCourse={selectedCourse}
          onBack={() => setSelectedCourse(null)}
        />
      </When>
      <When truthy={!selectedCourse}>
        <CoursesOverview onSelect={(course) => setSelectedCourse(course)} />
      </When>
    </main>
  );
};

export default UserLearningRoomPage;
