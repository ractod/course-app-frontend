import NoResult from "@components/elements/NoResult";
import MentorCard from "./MentorCard";

import { getAllMentors } from "@services/mentorServices";

import isEmpty from "lodash/isEmpty";

const getData = async (searchParams) => {
  try {
    const mentors = await getAllMentors(new URLSearchParams(searchParams).toString())
    return mentors
  } catch {
    throw new Error()
  }
}

const MentorsSection = async ({ searchParams }) => {
  const mentors = await getData(searchParams)

  if(isEmpty(mentors)) {
    return <NoResult hasResetButton />
  }

  return (
    <section>
      <div className="grid grid-cols-1 gap-x-10 gap-y-[100px] mt-10 sm:grid-cols-2 lg:grid-cols-4">
        {mentors.map(mentor => (
          <MentorCard key={mentor._id} mentor={mentor} />
        ))}
      </div>
    </section>
  );
}

export default MentorsSection;