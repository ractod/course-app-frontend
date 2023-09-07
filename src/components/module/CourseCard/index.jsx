

import Image from "next/image";
import Link from "next/link";

import MentorAvatar from "@components/elements/MentorAvatar";
import { Avatar, Grow } from "@mui/material";
import CardActions from "./CardActions";
import CardFooter from "./CardFooter";

import { BiCategory } from "react-icons/bi";

const CourseCard = ({
  course,
  course: { _id, cover, title, category, mentor },
}) => {
  return (
    <Grow in={true}>
      <div className="p-2 col-span-1 rounded-[15px] bg-white md:p-3">
        <div className="relative -mt-14">
          <Link href={`/courses/${_id}`} className="block aspect-[13/9]">
            <Image
              src={cover}
              alt="course cover"
              width={600}
              height={500}
              className="object-cover w-full h-full rounded-[10px] shadow-xl"
            />
          </Link>
          <CardActions course={course} />
        </div>
        <div className="p-1 mt-2 md:p-2">
          <Link
            href={`/courses/${_id}`}
            className="block text-base font-black truncate transition-colors 
            duration-[400ms] text-typography hover:text-primary-500 sm:text-lg lg:text-xl"
          >
            {title}
          </Link>
          <div className="flex items-center justify-between mt-4">
            <MentorAvatar mentor={mentor} />
            <div className="flex items-center gap-x-2">
              <BiCategory className="text-mute" />
              <p className="text-sm font-medium text-mute">{category.title}</p>
            </div>
          </div>
          <hr className="divider mt-4 mb-6" />
          <CardFooter course={course} />
        </div>
      </div>
    </Grow>
  );
};

export default CourseCard;
