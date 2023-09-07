"use client";
import Link from "next/link";

import BaseTable from "@components/elements/BaseTable";
import EmptyState from "@components/elements/EmptyState";

import useUser from "@hooks/useUser";

import { toPersianNumber } from "@utils/converters";

import { myCoursesTableHeads } from "@constants/tablesHeads";

import isEmpty from "lodash/isEmpty";

const TableItem = ({ course }) => {
  return (
    <tr className="tbody-row">
      <td>
        <Link
          href={`/courses/${course._id}`}
          className="transition-colors duration-150 hover:text-primary-500"
        >
          {course.title}
        </Link>
      </td>
      <td>
        <Link
          href={`/mentor/${course.mentor._id}`}
          className="transition-colors duration-150 hover:text-primary-500"
        >
          {course.mentor.fullname}
        </Link>
      </td>
      <td>{course.category.title}</td>
      <td>{toPersianNumber("2 ساعت")}</td>
      <td>{toPersianNumber(course.sessions.length)} جلسه</td>
    </tr>
  );
};

const CoursesTable = () => {
  const { user } = useUser();

  if (isEmpty(user?.purchasedCourses)) {
    return (
      <EmptyState
        title="دوره ای خریداری نشده"
        subTitle="به نظر می رسد شما هیچ دوره ای را خریداری نکردید"
        linkLabel="دیدن دوره ها"
        linkHref="/courses"
      />
    );
  }

  return (
    <BaseTable heads={myCoursesTableHeads}>
      {user?.purchasedCourses.map((course) => (
        <TableItem key={course._id} course={course} />
      ))}
    </BaseTable>
  );
};

export default CoursesTable;
