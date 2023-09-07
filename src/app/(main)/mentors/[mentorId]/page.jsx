import SingleMentorPage from "@components/views/main/single-mentor-page";

import { getMentorById } from "@services/mentorServices";

export const generateMetadata = async ({ params }) => {
  const data = await getMentorById(params.mentorId);
  if (!data?.mentorData) {
    notFound();
  }
  return {
    title: `آموزیلاین | مدرس ${data.fullname}`,
  };
};

const page = ({ params }) => {
  return <SingleMentorPage params={params} />;
};

export default page;
