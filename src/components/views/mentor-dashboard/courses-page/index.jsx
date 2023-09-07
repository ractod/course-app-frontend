"use client";
import { useState } from "react";

import DotsLoading from "@components/elements/DotsLoading";
import { Button } from "@mui/material";
import CoursesTable from "./CoursesTable";
import CreateCourseModal from "./modals/CreateCourseModal";

import useToggle from "@hooks/useToggle";
import useUser from "@hooks/useUser";

import { BiSolidMessageSquareAdd } from "react-icons/bi";

import StatusFilter from "../../../module/StatusFilter";

const statusOptions = [
  {
    label: "همه",
    value: "",
  },
  {
    label: "در انتظار",
    value: "in_progress",
  },
  {
    label: "رد شده",
    value: "rejected",
  },
  {
    label: "منتشر شده",
    value: "verified",
  },
];


const MentorCoursesPage = () => {
  const { user, loading } = useUser();
  const [isCreateModalOpen, toggleCreateModal] = useToggle(false)
  const [selectedStatus, setSelectedStatus] = useState(statusOptions[0]);
  const courses = user?.mentorData.courses.filter((course) =>
    course.status.includes(selectedStatus.value)
  );

  const handleSelect = (value) => () => {
    setSelectedStatus(value);
  };

  if (loading) {
    return (
      <main className="h-screen flex-1">
        <DotsLoading />
      </main>
    );
  }

  return (
    <main className="container  py-10 px-5">
      <section>
        <h2 className="text-lg text-mute font-black md:text-xl lg:text-2xl">
          دوره های من
        </h2>
        <div className="flex flex-col items-center justify-between gap-5 mt-10 mb-7 md:flex-row">
          <StatusFilter
            onSelect={handleSelect}
            selectedStatus={selectedStatus}
            options={statusOptions}
          />
          <Button
            variant="contained"
            endIcon={<BiSolidMessageSquareAdd />}
            className="max-md:w-full"
            onClick={toggleCreateModal}
          >
            دوره جدید
          </Button>
          <CreateCourseModal
            open={isCreateModalOpen}
            onClose={toggleCreateModal}
          />
        </div>
        <CoursesTable courses={courses} />
      </section>
    </main>
  );
};

export default MentorCoursesPage;
