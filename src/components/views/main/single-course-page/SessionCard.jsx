// icon
import Image from "next/image";

import When from "@components/elements/When";

import { toPersianTime } from "@utils/converters";

import { TfiLock } from "react-icons/tfi";

const SessionCard = ({ session, course, isActive, onSelect }) => {
  return (
    <div
      onClick={onSelect(session)}
      className={`
        flex items-center gap-x-[10px] p-[10px] rounded-[10px]
        transition-all duration-300 cursor-pointer
        ${!session.isFree ? "opacity-50" : ""} ${isActive ? "bg-gray-400 text-white" : "bg-white text-typography"}
      `}
    >
      <div className="relative w-[80px] h-[50px]">
        <Image
          src={session.cover || course.cover}
          alt="session cover"
          width={80}
          height={50}
          className="object-cover rounded-[5px]"
        />
        <When truthy={!session.isFree}>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6
            flex items-center justify-center rounded-full bg-white"
          >
            <TfiLock className="text-xs text-primary-500" />
          </div>
        </When>
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-bol md:text-[15px] lg:text-base">
          {session.title}
        </p>
        <span className="text-xs font-bold text-secondary-500 md:text-[13px] lg:text-sm">
          {toPersianTime(session.duration)}
        </span>
      </div>
    </div>
  );
};

export default SessionCard;
