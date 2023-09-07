"use client";
import { useState } from "react";
import Link from "next/link";

import Error from "@components/elements/Error";
import NoResult from "@components/elements/NoResult";
import When from "@components/elements/When";
import CourseCard from "@components/module/CourseCard";
import CourseCardSkeleton from "@components/module/CourseCardSkeleton";
import { Button } from "@mui/material";

import useQuery from "@hooks/useQuery";

import { getAllCourses } from "@services/coursesServices";

import isEmpty from "lodash/isEmpty";

const categories = [
  {
    title: "دیزاین",
    value: "design",
  },
  {
    title: "فرانت اند",
    value: "frontend",
  },
  {
    title: "کامپیوتر",
    value: "computer",
  },
];

const CoursesFallback = () => (
  <div className="coursesContainer mt-[100px]">
    {Array.from({ length: 4 }, (item, index) => (
      <CourseCardSkeleton key={index} />
    ))}
  </div>
);

const CoursesSection = () => {
  const [courses, { loading, error }] = useQuery([], getAllCourses);
  const [selectedCategory, setSelectedCategory] = useState("frontend");
  const filteredCourses = courses
    .filter((course) => course.category.englishTitle === selectedCategory)
    .slice(0, 4);

  return (
    <section className="flex flex-col items-center mt-10 sm:mt-[100px]  lg:mt-[140px]">
      <div>
        <h2 className="font-black text-center text-typography text-[30px] sm:text-[35px] lg:text-[45px]">
          دوره های با کیفیت برای دانشجویان
        </h2>
        <p className="mt-[20px] mb-10 font-medium text-center text-mute text-sm sm:text-[15px] lg:text-base">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامع.
        </p>
      </div>
      <div className="flex overflow-x-auto min-w- w-fit gap-x-2">
        {categories.map((category) => (
          <Button
            key={category.value}
            color="secondary"
            variant={selectedCategory === category.value ? "contained" : "text"}
            onClick={() => setSelectedCategory(category.value)}
            className={
              selectedCategory !== category.value ? "text-typography" : ""
            }
          >
            {category.title}
          </Button>
        ))}
      </div>
      <When truthy={!loading} fallback={<CoursesFallback />}>
        <When truthy={!error} fallback={<Error />}>
          <When truthy={!isEmpty(filteredCourses)} fallback={<NoResult />}>
            <div className="coursesContainer mt-[100px]">
              {filteredCourses.map((course) => (
                <CourseCard key={course._id} course={course} />
              ))}
            </div>
          </When>
        </When>
      </When>
      <Button
        LinkComponent={Link}
        href="/courses"
        variant="contained"
        className="mt-[90px]"
      >
        دیدن دوره های بیشتر
      </Button>
    </section>
  );
};

export default CoursesSection;
