
import BannerSection from "./BannerSection";
import Details from "./Details";
import Informations from "./Informations";

import { getMentorById } from "@services/mentorServices";

export const dynamic = "force-dynamic";

const getData = async (params) => {
  try {
    const mentor = await getMentorById(params.mentorId);
    return mentor
  } catch {
    throw new Error()
  }
}

const SingleMentorPageTemplate = async ({ params }) => {
  const mentor = await getData(params);

  return (
    <main className="container mt-5">
      <BannerSection mentor={mentor} />
      <section className="flex gap-x-10 gap-y-[30px] mt-6 max-xl:flex-col-reverse">
        <Informations mentor={mentor} />
        <Details mentor={mentor} />
      </section>
    </main>
  );
};

export default SingleMentorPageTemplate;
