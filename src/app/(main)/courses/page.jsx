import CoursesPage from "@components/views/main/courses-page";

export const metadata = {
  title: "آموزیلاین | دوره ها",
};

const page = ({ searchParams }) => {
  return <CoursesPage searchParams={searchParams} />;
};

export default page;
