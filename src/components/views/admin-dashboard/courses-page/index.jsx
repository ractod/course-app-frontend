"use client";

import { useState } from "react";

import DotsLoading from "@components/elements/DotsLoading";
import StatusFilter from "@components/module/StatusFilter";
import AdminCoursesTable from "./AdminCoursesTable";

import useQuery from "@hooks/useQuery";

import { getAdminAllCourses } from "@services/adminServices";

const statusOptions = [
  {
    label: "همه",
    value: "",
  },
  {
    label: "در انتظار تایید",
    value: "in_progress",
  },
  {
    label: "تایید شده",
    value: "verified",
  },
  {
    label: "رد شده",
    value: "rejected",
  },
];

const AdminCoursesPage = () => {
  const [courses, { loading, setData: setCourses }] = useQuery(
    [],
    getAdminAllCourses
  );
  const [selectedStatus, setSelectedStatus] = useState(statusOptions[0]);
  const filteredCourses = courses.filter((course) =>
    course.status.includes(selectedStatus.value)
  );

  const handleSelect = (option) => () => {
    setSelectedStatus(option);
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
      <section className="h-full">
        <div className="mb-7">
          <h2 className="mb-10 text-lg text-mute font-black md:text-xl lg:text-2xl">
            دوره ها
          </h2>
          <StatusFilter
            selectedStatus={selectedStatus}
            options={statusOptions}
            onSelect={handleSelect}
          />
        </div>
        <AdminCoursesTable setCourses={setCourses} courses={filteredCourses} />
      </section>
    </main>
  );
};

export default AdminCoursesPage;
