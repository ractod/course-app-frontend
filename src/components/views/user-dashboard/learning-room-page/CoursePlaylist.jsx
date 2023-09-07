"use client";
import { useState } from "react";

import { IconButton } from "@mui/material";
import SessionCard from "./SessionCard";

import playerOptions from "@constants/playerOptions";

import { FaLongArrowAltRight } from "react-icons/fa";

import Plyr from "plyr-react";

const CoursePlaylist = ({ selectedCourse, onBack }) => {
  const [selectedSession, setSelectedSession] = useState(
    selectedCourse.sessions[0]
  );

  return (
    <section className="relative">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-black text-mute md:text-[19px] lg:text-xl">
          {selectedCourse.title}
        </h2>
        <IconButton onClick={onBack}>
          <FaLongArrowAltRight />
        </IconButton>
      </div>
      <div className="relative p-5 mt-3 rounded-[15px] bg-white">
        <div className="lg:ml-[340px]">
          <Plyr
            options={playerOptions}
            poster={selectedCourse.cover}
            source={{ type: "video", sources: [{src: selectedSession.videoLink}] }}
          />
          <h4 className="mt-5 text-lg font-black text-typography md:text-xl lg:text-2xl">
            {selectedSession.title}
          </h4>
          <p className="text-sm font-medium text-mute md:text-[15px] lg:text-base">
            {selectedSession.description} لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
            متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
            شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
            ابزارهای.
          </p>
        </div>
        <div 
          className="h-full space-y-5 overflow-y-auto scrollbar-hidden max-lg:mt-10 
          lg:p-5 lg:pr-0 lg:absolute lg:left-0 lg:top-0 lg:min-w-[300px]"
        >
          {selectedCourse.sessions.map((session, index) => (
            <SessionCard
              key={session._id}
              session={session}
              index={index}
              isActive={selectedSession._id == session._id}
              onSelect={() => setSelectedSession(session)}
            />
          ))}
        </div>
      </div>
      <span
        className="absolute top-0 left-0 aspect-[16/4] w-[40vw] rounded-full bg-gradient-to-tr -z-10
        from-primary-200 via-slate-400 to-primary-700 blur-[90px] sm:w-[30vw] md:w-[25vw] md:blur-[100px]"
      ></span>
      <span
        className="absolute bottom-0 right-0 aspect-square w-[40vw] rounded-full bg-gradient-to-tr -z-10
        from-primary-200 via-slate-400 to-primary-700 blur-[90px] sm:w-[30vw] md:w-[25vw] md:blur-[100px]"
      ></span>
    </section>
  );
};

export default CoursePlaylist;
