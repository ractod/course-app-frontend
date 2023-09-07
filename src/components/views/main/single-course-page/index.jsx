
import CourseCard from "@components/module/CourseCard";
import Details from "./Details";
import Informations from "./Informations";
import PlaylistSection from "./PlaylistSection";

import { getCourseById } from "@services/coursesServices";

export const dynamic = "force-dynamic";

const getData = async (params) => {
  try {
    const data = await getCourseById(params.courseId);
    return data
  } catch {
    throw new Error()
  }
}

const SingleCoursePageTemplate = async ({ params }) => {
  const data = await getData(params)

  return (
    <main className="container mt-5">
      <PlaylistSection course={data.course} />
      <section className="flex gap-10 mt-[70px] max-lg:flex-col">
        <Informations course={data.course} />
        <Details course={data.course} />
      </section>
      <section className="mt-[100px]">
        <h2 className="text-lg font-black text-typography md:text-xl lg:text-2xl">
          دوره های مرتبط
        </h2>
        <div className="coursesContainer mt-20">
          {data.relatedCourses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default SingleCoursePageTemplate;
