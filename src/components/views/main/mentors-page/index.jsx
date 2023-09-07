import { Suspense } from "react";

import PageBanner from "@components/elements/PageBanner";
import FieldsSection from "./FieldsSection";
import MentorCardSkeleton from "./MentorCardSkeleton";
import MentorsSection from "./MentorsSection";

import { getAllFields } from "@services/FieldsServices";

const Fallback = () => (
  <div className="grid grid-cols-1 gap-x-10 gap-y-[100px] sm:grid-cols-2 lg:grid-cols-4">
    {Array.from({ length: 12 }, (item, index) => (
      <MentorCardSkeleton key={index} />
    ))}
  </div>
);

const MentorsPageTemplate = async ({ searchParams }) => {
  const fields = await getAllFields();

  return (
    <main className="container mt-5">
      <PageBanner
        image="/images/mentors-page-banner.png"
        title="مدرس های با تجربه در تمام سطوح"
      />
      <FieldsSection fields={fields} />
      <Suspense fallback={<Fallback />}>
        <MentorsSection searchParams={searchParams} />
      </Suspense>
    </main>
  );
};

export default MentorsPageTemplate;
