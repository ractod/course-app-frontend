"use client";

import { useState } from "react";

import { Slide, Tab } from "@mui/material";

import { TabContext, TabList, TabPanel } from "@mui/lab";

const tabs = [
  {
    label: "نیازمندی های مدرس",
    value: "requirments",
    items: [
      "مدرک تحصیلی مرتبط با رشته درس",
      "حداقل یک سال تجربه آموزش درس مورد نظر",
      "مهارت در تدریس و انتقال مفاهیم به دانشجویان",
      "تسلط بر زبان فارسی و مهارت در بیان",
    ],
  },
  {
    label: "قوانین یک مدرس",
    value: "rules",
    items: [
      "رعایت احترام و اخلاق در هنگام تدریس",
      "پاسخگویی به سوالات دانشجویان در زمان مقرر",
      "ارائه محتوای کیفی و به روز برای دانشجویان",
      "ارتباط منظم با مدیریت سایت برای بهبود خدمات",
    ],
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("requirments");

  const renderTab = () => {
    const tab = tabs.find((tab) => tab.value == activeTab);
    return (
      <ul className="mt-5">
        {tab.items.map((item) => (
          <li
            key={item}
            className="list-disc list-inside text-sm font-medium text-mute md:text-[15px]
            lg:text-base marker:text-secondary-500 marker:text-xl"
          >
            {item}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="mt-5 overflow-hidden">
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`
              pb-[10px] pr-[30px] border-b border-solid text-sm
              cursor-pointer first:pr-0 md:text-base transition-colors duration-150
              ${activeTab == tab.value? "text-secondary-600 border-b-secondary-600 font-extrabold" :
              "text-typography border-b-typography hover:text-secondary-400 font-medium" }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <Slide key={activeTab} in direction="left">
        {renderTab()}
      </Slide>
    </div>
  );
};

export default Tabs;

