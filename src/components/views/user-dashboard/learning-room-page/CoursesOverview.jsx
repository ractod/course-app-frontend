
import EmptyState from "@components/elements/EmptyState";
import When from "@components/elements/When";
import CourseCard from "./CourseCard";

import useUser from "@hooks/useUser";

import { AiOutlineInfoCircle } from "react-icons/ai";

import isEmpty from "lodash/isEmpty";

const CoursesOverview = ({ onSelect }) => {
  const { user } = useUser();

  return (
    <section className="h-full">
      <div>
        <h2 className="text-lg text-mute font-black md:text-xl lg:text-2xl">
          اتاق یادگیری
        </h2>
        <div className="flex items-center gap-x-2 mt-2 text-mute">
          <AiOutlineInfoCircle />
          <p className="text-sm font-bold md:text-[15px] lg:text-base">
            با انتخاب یک دوره یادگیری را شروع کنید
          </p>
        </div>
      </div>
      <When
        truthy={!isEmpty(user?.purchasedCourses)}
        fallback={
          <EmptyState
            title="دوره ای وجود ندارد"
            subTitle="به نظر می رسد دوره ای خریداری نشده"
            linkHref="/courses"
            linkLabel="دیدن دوره ها"
          />
        }
      >
        <div className="mt-10 space-y-5">
          {user?.purchasedCourses.map((course) => (
            <CourseCard key={course} course={course} onSelect={onSelect} />
          ))}
        </div>
      </When>
    </section>
  );
};

export default CoursesOverview;
