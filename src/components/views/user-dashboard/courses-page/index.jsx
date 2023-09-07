"use client";
import Link from "next/link";

import DotsLoading from "@components/elements/DotsLoading";
import CoursesTable from "./CoursesTable";

import useUser from "@hooks/useUser";

import { AiOutlineInfoCircle } from "react-icons/ai";

const UserCoursesPage = () => {
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
      <section className="h-full">
        <div className="mb-10">
          <h2 className="text-lg text-mute font-black md:text-xl lg:text-2xl">
            دوره های من
          </h2>
          <div className="flex items-center gap-x-2 mt-2 text-mute">
            <AiOutlineInfoCircle />
            <p className="text-sm font-bold md:text-[15px] lg:text-base">
              دوره های شما از طریق
              <Link
                href="/dashboard/learning-room"
                className="font-extrabold transition-colors duration-150 hover:text-primary-500"
              >
                {" "}
                اتاق یادگیری{" "}
              </Link>
              قابل دسترسی می باشد
            </p>
          </div>
        </div>
        <CoursesTable />
      </section>
    </main>
  );
};

export default UserCoursesPage;
