"use client";
import { useState } from "react";
import Link from "next/link";

import { Rating } from "@mui/material";

import useMutation from "@hooks/useMutation";

import { toPersianNumber } from "@utils/converters";

// service
import { rateToMentor } from "@services/mentorServices";

import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";

import { toast } from "react-toastify";

const icons = {
  facebook: <BiLogoFacebook />,
  instagram: <AiOutlineInstagram />,
  twitter: <AiOutlineTwitter />,
  linkedin: <AiFillLinkedin />,
};

const Details = ({ mentor: { mentorData, _id } }) => {
  const [rate, setRate] = useState(mentorData.rate.avrage || 0);

  const existingSocialMedias = Object.entries(mentorData.socialMedias).filter(
    ([key, value]) => !!value
  ); // removing the empty values from Object
  const [mutateRate] = useMutation(rateToMentor, {
    onSuccess: (data) => {
      setRate(data.avrage);
      toast.success(data.message);
    },
  });

  return (
    <div className="lg:min-w-[400px]">
      <div className="py-[30px] px-[20px] rounded-[10px] space-y-3 bg-white">
        <div className="flex items-center justify-between">
          <p className="text-base font-black text-mute md:text-lg lg:text-xl">
            تعداد دوره ها
          </p>
          <span className="text-lg font-medium md:text-[20px] lg:text-[24px] text-secondary-500">
            {toPersianNumber(mentorData.courses.length)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-base font-black text-mute md:text-lg lg:text-xl">
            تجربه
          </p>
          <span className="text-[15px] font-medium lg:text-lg text-mute md:text-base">
            {mentorData.experience}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-base font-black text-mute md:text-lg lg:text-xl">
            تعداد دانشجویان
          </p>
          <span className="text-lg font-medium md:text-[20px] lg:text-[24px] text-secondary-500">
            {toPersianNumber(mentorData.stats.students.length)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-base font-black text-mute md:text-lg lg:text-xl">
            امتیاز
          </p>
          <Rating
            value={rate}
            onChange={(event, value) => mutateRate(_id, value)}
            size="small"
            dir="ltr"
          />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-base font-black text-mute md:text-lg lg:text-xl">
            فضای مجازی
          </p>
          <div className="flex items-center gap-x-1">
            {existingSocialMedias.map(([key, value]) => (
              <Link
                key={value}
                href={value}
                className="w-10 h-10 flex justify-center items-center rounded-full transition-colors 
                duration-200 text-2xl text-typography hover:text-white hover:bg-secondary-500"
              >
                {icons[key]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
