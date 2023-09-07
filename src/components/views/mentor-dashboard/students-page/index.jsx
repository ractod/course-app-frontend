"use client";
import DotsLoading from "@components/elements/DotsLoading";
import StudentsTable from "@components/module/Tables/StudentsTable";

import useUser from "@hooks/useUser";

const MentorStudentsPage = () => {
  const { user, loading } = useUser();
  const students = user?.mentorData.stats.students;

  if (loading) {
    return (
      <main className="h-screen flex-1">
        <DotsLoading />
      </main>
    );
  }

  return (
    <main className="container py-10 px-5">
      <section className="h-full">
        <h2 className="mb-5 text-lg text-mute font-black md:text-xl lg:text-2xl">
          دانشجویان من
        </h2>
        <StudentsTable students={students} />
      </section>
    </main>
  );
};

export default MentorStudentsPage;
