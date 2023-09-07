import Image from "next/image";

import BaseModal from "@components/elements/BaseModal";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

import { toPersianNumber } from "@utils/converters";

import playerOptions from "@constants/playerOptions";

import { IoIosArrowDown } from "react-icons/io";

import Plyr from "plyr-react";

const CourseDetailsModal = ({ open, onClose, details, course }) => {
  return (
    <BaseModal open={open} onClose={onClose} maxWidth="md">
      <BaseModal.header title="جزئیات دوره" onClose={onClose} />
      <BaseModal.content>
        <Image
          width={500}
          height={340}
          src={course.cover}
          alt="course cover"
          className="block aspect-[13/9] w-[500px] h-fit mx-auto object-cover rounded-xl"
        />
        <div className="my-4 text-right divide-y-2 divide-gray-100">
          {details.map((detail) => (
            <DetailItem key={detail.label} {...detail} />
          ))}
        </div>
        <div>
          <h2 className="text-base font-black text-typography md:text-[17px] lg:text-lg text-right">
            جلسات دوره
          </h2>
          <div className="mt-2">
            {course.sessions.map((session, index) => (
              <SessionItem
                key={session._id}
                session={session}
                index={index}
                poster={course.cover}
              />
            ))}
          </div>
        </div>
      </BaseModal.content>
    </BaseModal>
  );
};

export default CourseDetailsModal;

const DetailItem = ({ label, value, innerHtml }) => (
  <div className="grid grid-cols-1 gap-2 py-3 border-solid sm:grid-cols-3">
    <p className="cols-span-1 text-base font-black text-typography md:text-[17px] lg:text-lg">
      {label}:
    </p>
    <p dangerouslySetInnerHTML={{ __html: innerHtml }} className="col-span-1 text-sm font-bold text-mute md:text-[15px] lg:text-base sm:col-span-2">
      {value}
    </p>
  </div>
);

const SessionItem = ({ session, index, poster }) => (
  <Accordion TransitionProps={{ unmountOnExit: true }} key={session._id}>
    <AccordionSummary expandIcon={<IoIosArrowDown />}>
      <h4 className="text-sm font-bold text-typography md:text-[15px] lg:text-base">
        جلسه {toPersianNumber(index + 1)} ({session.isFree ? "رایگان" : "غیر رایگان"})
      </h4>
    </AccordionSummary>
    <AccordionDetails>
      <Plyr
        options={playerOptions}
        poster={poster}
        preload="none"
        source={{ type: "video", sources: [{src: session.videoLink}] }}
        itemID={session._id}
        id={session._id}
      />
      <h6 className="mt-2 text-base font-black text-typography md:text-[15px] lg:text-base text-right">
        {session.title}
      </h6>
      <p className="mt-1 text-xs font-medium text-mute md:text-[13px] lg:text-sm text-right whitespace-pre-wrap">
        {session.description}
      </p>
    </AccordionDetails>
  </Accordion>
);
