

import Image from "next/image";

import { Button } from "@mui/material";

import { toPersianNumber } from "@utils/converters";

import { BiSolidTimeFive, BiSolidVideo } from "react-icons/bi";
import { FaLongArrowAltLeft } from "react-icons/fa";

const CourseCard = ({
  course,
  course: { cover, title, details, sessions },
  onSelect,
}) => {
  return (
    <div className="flex flex-col items-center gap-x-4 px-3 py-2 rounded-[15px] bg-white sm:flex-row sm:py-4 sm:px-6">
      <Image
        src={cover}
        alt="course cover"
        width={420}
        height={300}
        className="rounded-xl object-cover aspect-[13/9] h-fit w-full sm:w-[100px]"
      />
      <div className="min-w-0 w-full flex-auto flex flex-col gap-x-14 max-sm:p-2 sm:flex-row sm:justify-between sm:items-center">
        <div className="min-w-0">
          <h3 className="truncate text-base font-black text-typography md:text-[17px] lg:text-lg">
            {title}
          </h3>
          <div className="flex items-center gap-x-5 mt-2">
            <div className="flex items-center gap-x-1 text-gray-500">
              <BiSolidTimeFive />
              <span className="mt-1 text-xs font-medium md:text-[13px] lg:text-sm">
                {toPersianNumber(details.duration)}
              </span>
            </div>
            <div className="flex items-center gap-x-1 text-gray-500">
              <BiSolidVideo />
              <span className="mt-1 text-xs font-mediummd:text-[13px] lg:text-sm">
                {toPersianNumber(sessions.length)} جلسه
              </span>
            </div>
          </div>
        </div>
        <Button
          variant="contained"
          className="py-2 px-4 shrink-0 max-sm:mt-10"
          endIcon={<FaLongArrowAltLeft />}
          onClick={() => onSelect(course)}
        >
          شروع
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
