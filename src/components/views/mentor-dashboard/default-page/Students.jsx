import Link from "next/link";

import When from "@components/elements/When";
import StudentsTable from "@components/module/Tables/StudentsTable";

import useUser from "@hooks/useUser";

import { FaLongArrowAltLeft } from "react-icons/fa";

const Students = () => {
  const { user } = useUser();
  const students = user?.mentorData.stats.students || [];

  return (
    <section className="mt-10">
      <div className="flex justify-between">
        <h2 className="text-lg text-mute font-black md:text-xl lg:text-2xl">
          دانشجویان من
        </h2>
        <When truthy={students.length > 3}>
          <Link
            href="/mentor/students"
            className="flex items-center gap-x-2 text-mute transition-colors duration-150 hover:text-primary-500"
          >
            <span className="text-sm font-bold md:text-[15px] lg:text-base">
              بیشتر
            </span>
            <FaLongArrowAltLeft />
          </Link>
        </When>
      </div>
      <div className="mt-5">
        <StudentsTable students={students.toReversed().slice(0 ,3)} />
      </div>
    </section>
  );
};

export default Students;
