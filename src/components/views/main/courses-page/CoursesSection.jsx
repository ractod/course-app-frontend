
import NoResult from "@components/elements/NoResult";
import CourseCard from "@components/module/CourseCard";
import Pagination from "./Pagination";

import { getAllCourses } from "@services/coursesServices";

import isEmpty from "lodash/isEmpty";

const getData = async (searchParams) => {
  try {
    const data = await getAllCourses(new URLSearchParams({ ...searchParams, limit: 20 }).toString())
    return data
  } catch {
    throw new Error()
  }
}

const CoursesSection = async ({ searchParams }) => {

  const data = await getData(searchParams)

  if(isEmpty(data.courses)) {
    return <NoResult hasResetButton />
  }

  return (
    <section className="mt-24">
      <div className="coursesContainer">
        {data.courses.map(course => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
      <Pagination pagesCount={data.pagesCount} />
    </section>
  );
}

export default CoursesSection;