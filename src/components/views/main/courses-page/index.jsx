import { Suspense } from "react";

import PageBanner from "@components/elements/PageBanner";
import CourseCardSkeleton from "@components/module/CourseCardSkeleton";
import CoursesSection from "./CoursesSection";
import Categories from "./filters/Categories";
import Search from "./filters/Search";
import Sort from "./filters/Sort";

import { getAllCategories } from "@services/categoriesServices";

export const dynamic = "force-dynamic";

const CoursesFallback = () => (
  <div className="coursesContainer mt-24">
    {Array.from({ length: 20 }, (item, index) => (
      <CourseCardSkeleton key={index} />
    ))}
  </div>
);

const CoursesPageTemplate = async ({ searchParams }) => {
  const categories = await getAllCategories();

  return (
    <main className="container mt-5">
      <PageBanner
        image="/images/courses-page-banner.png"
        title="دوره های استاندارد برای تمام سطوح"
      />
      <section className="grid grid-cols-1 gap-5 mt-10 sm:gap-7 sm:grid-cols-2">
        <Categories categories={categories} />
        <Search />
        <Sort />
      </section>
      <Suspense fallback={<CoursesFallback />}>
        <CoursesSection searchParams={searchParams} />
      </Suspense>
    </main>
  );
};

export default CoursesPageTemplate;
