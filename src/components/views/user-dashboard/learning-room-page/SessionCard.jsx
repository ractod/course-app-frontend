import { toPersianNumber } from "@utils/converters";

import { BiSolidTimeFive } from "react-icons/bi";

const SessionCard = ({ session: { title, duration }, index, isActive, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className={`
        flex items-center gap-x-5 py-2 px-4 transition-all text-mute rounded-xl duration-100 cursor-pointer 
        ${isActive ? "bg-slate-600 text-white" : "hover:text-typography hover:shadow-xl"}
      `}
    >
      <p 
        className="min-w-[32px] min-h-[32px] flex items-center justify-center pt-1 
        rounded-xl text-sm font-black bg-gray-300 text-typography shadow-xl"
      >
        {index + 1}
      </p>
      <div className="min-w-0">
        <p className="truncate text-sm font-bold md:text-[15px] lg:text-base">
          {title}
        </p>
        <div className="flex items-center gap-x-1 ">
          <BiSolidTimeFive />
          <span className="truncate mt-1 text-xs font-medium md:text-[13px] lg:text-sm">
            {toPersianNumber(duration)}{" "}دقیقه
          </span>
        </div>
      </div>
    </div>
  );
};

export default SessionCard;
