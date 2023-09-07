"use client";
import { useState } from "react";

import CourseCard from "@components/module/CourseCard";
import { Avatar, Button, Grow } from "@mui/material";

const tabs = [
  { label: "درباره", value: "about" },
  { label: "دوره ها", value: "courses" },
];

const Informations = ({ mentor: { mentorData, avatar, fullname } }) => {
  const [activeTab, setActiveTab] = useState("about");

  const renderTab = () => {
    switch (activeTab) {
      case "about":
        return (
          <Grow in>
            <div className="mt-[30px]">
              <h3 className="text-[15px] font-black text-typography md:text-base lg:text-[17px]">
                درباره {fullname}
              </h3>
              <p className="mt-1 text-sm font-medium text-mute md:text-[15px] lg:text-base">
                {mentorData.biography}
              </p>
            </div>
          </Grow>
        );
      case "courses":
        return (
          <div  
            className="grid grid-cols-1 gap-x-5 gap-y-[64px] mt-[76px] sm:grid-cols-2
            md:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-3"
          >
            {mentorData.courses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex-auto xl:pr-10 xl:-translate-y-20">
      <div className="flex items-end gap-x-5 max-xl:hidden">
        <Avatar
          src={avatar}
          alt="mentor avatar"
          variant="rounded"
          className="w-[170px] h-[170px] rounded-[10px] object-cover"
        />
        <div>
          <p className="text-[22px] font-black text-typography md:text-[25px] lg:text-[30px]">
            {fullname}
          </p>
          <p className="text-base font-medium text-mute md:text-lg lg:text-xl">
            {mentorData.fields.map((field) => field.title).join("، ")}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-x-5 xl:mt-[50px]">
        {tabs.map((tab) => (
          <Button
            key={tab.value}
            color="secondary"
            variant="contained"
            onClick={() => setActiveTab(tab.value)}
            className={activeTab !== tab.value ? "bg-white text-typography" : ""}
          >
            {tab.label}
          </Button>
        ))}
      </div>
      {renderTab()}
    </div>
  );
};

export default Informations;
