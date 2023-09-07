"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
} from "@mui/material";

import useToggle from "@hooks/useToggle";

import { toPersianDate, toPersianNumber } from "@utils/converters";

import { AiFillStar } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

const MentorCard = ({ mentor: { avatar, fullname, mentorData, _id } }) => {
  const [isOpen, toggleOpen] = useToggle(false);
  
  return (
    <div className="relative col-span-1">
      <Image
        alt="mentor avatar"
        src={avatar || "/images/user-placeholder.png"}
        width={300}
        height={300}
        className={`
          block h-fit w-full aspect-square rounded-[10px] object-cover border-0 outline-0
          transition-all duration-300 ${isOpen ? "rounded-b-none" : ""}
        `}
      />
      <Accordion
        expanded={isOpen}
        onChange={toggleOpen}
        classes={{
          root: `absolute top-full right-0 w-full m-0 px-[15px] pt-[10px] shadow-none 
          bg-transparent transition-colors duration-300 z-10 before:hidden`,
          expanded: "rounded-b-[10px] shadow-xl bg-white",
        }}
      >
        <AccordionSummary
          expandIcon={<IoIosArrowDown className="text-typography" />}
          classes={{
            root: "items-start p-0 min-h-fit",
            content: "min-w-0 m-0",
          }}
        >
          <div className="min-w-0">
            <Link
              href={`/mentors/${_id}`}
              className="text-sm font-extrabold text-typography transition-colors 
              duration-150 md:text-[15px] lg:text-base hover:text-primary-500"
            >
              {fullname}
            </Link>
            <p className={`${!isOpen ? "truncate" : ""} text-xs font-bold text-typography md:text-[13px] lg:text-sm`} >
              حوضه کاری:{" "}
              <span className="font-medium text-mute">
                {mentorData.fields.map((field) => field.title).join("، ")}
              </span>
            </p>
          </div>
        </AccordionSummary>
        <AccordionDetails className="p-0 pt-2 pb-[12px]">
          <p className="line-clamp-5 text-xs font-bold text-typography md:text-[13px] lg:text-sm">
            درباره:{" "}
            <span className="font-medium text-mute">
              {mentorData.biography}
            </span>
          </p>
          <div className="flex items-center gap-x-1">
            <p className="text-xs font-medium text-mute md:text-[13px] lg:text-sm">
              (
              <span className="text-secondary-500">
                {toPersianNumber(mentorData.rate.totalAmount)}
              </span>
              ) {toPersianNumber(mentorData.rate.avrage)}
            </p>
            <AiFillStar className="text-lg text-yellow-500" />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MentorCard;
