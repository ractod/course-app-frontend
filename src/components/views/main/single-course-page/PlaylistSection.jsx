"use client";
// #FIXME responsive the section height

import { useState } from "react";

import SessionCard from "./SessionCard";

import playerOptions from "@constants/playerOptions";

import Plyr from "plyr-react";

const PlaylistSection = ({ course }) => {
  const [selectedSession, setSelectedSession] = useState(course.sessions[0]);

  const handleSelect = (session) => () => {
    if (session.isFree) setSelectedSession(session);
  };

  return (
    <section className="relative rounded-[20px] p-[15px] bg-white">
      <div className="lg:ml-[340px]">
        <Plyr
          options={playerOptions}
          poster={course.cover}
          source={{
            type: "video",
            sources: [{ src: selectedSession.videoLink }],
          }}
        />
        <h3 className="mt-5 text-lg font-black text-typography md:text-xl lg:text-2xl">
          {selectedSession.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-mute md:text-[15px] lg:text-base">
          {selectedSession.description}
        </p>
      </div>
      <div className="overflow-y-auto scrollbar-hidden max-lg:mt-10 lg:absolute lg:top-[15px] lg:left-[15px] lg:min-w-[300px]">
        <h3
          className="sticky top-0 p-2 rounded-xl text-lg font-black text-typography 
          bg-[#EFEBF5] max-lg:hidden md:text-xl lg:text-2xl z-10"
        >
          جلسات دوره
        </h3>
        <div className="mt-5 px-2 space-y-4 sm:px-6">
          {course.sessions.map((session) => (
            <SessionCard
              key={session._id}
              session={session}
              course={course}
              isActive={selectedSession._id == session._id}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlaylistSection;
