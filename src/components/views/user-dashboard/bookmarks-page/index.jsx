"use client";

import Link from "next/link";

import DotsLoading from "@components/elements/DotsLoading";
import When from "@components/elements/When";
import CourseCard from "@components/module/CourseCard";
import NoBookmarks from "./NoBookmarks";

import useUser from "@hooks/useUser";

import { FaLongArrowAltLeft } from "react-icons/fa";

import isEmpty from "lodash/isEmpty";

const UserBookmarksPage = () => {
  const { user, loading } = useUser();

  if (loading) {
    return (
      <main className="h-screen flex-1">
        <DotsLoading />
      </main>
    );
  }

  return (
    <main className="container px-5 py-10">
      <section className="h-full">
        <div className="flex items-center justify-between">
          <h2 className="text-lg text-mute font-black md:text-xl lg:text-2xl">
            دوره های ذخیره شده
          </h2>
          <Link
            href="/courses"
            className="flex items-center gap-x-2 text-mute transition-colors duration-150 hover:text-primary-500"
          >
            <span className="text-sm font-bold md:text-[15px] lg:text-base">
              دیدن دوره ها
            </span>
            <FaLongArrowAltLeft />
          </Link>
        </div>
        <When truthy={!isEmpty(user?.savedCourses)} fallback={<NoBookmarks />}>
          <div className="coursesContainer mt-24">
            {user?.savedCourses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        </When>
      </section>
    </main>
  );
};

export default UserBookmarksPage;
