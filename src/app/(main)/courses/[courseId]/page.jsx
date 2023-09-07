import { notFound } from "next/navigation";

import SingleCoursePage from "@components/views/main/single-course-page";

// service
import { getCourseById } from "@services/coursesServices";

export const generateMetadata = async ({ params }) => {
  const data = await getCourseById(params.courseId);
  if (!data?.course) {
    notFound();
  }
  return {
    title: `آموزیلاین | ${data.course.title}`,
  };
};

const page = ({ params }) => {
  return <SingleCoursePage params={params} />;
};

export default page;
