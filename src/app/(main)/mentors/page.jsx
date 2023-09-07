import MentorsPage from "@components/views/main/mentors-page";

export const metadata = {
  title: "آموزیلاین | مدرس ها",
};

const page = ({ searchParams }) => {
  return <MentorsPage searchParams={searchParams} />;
};

export default page;
