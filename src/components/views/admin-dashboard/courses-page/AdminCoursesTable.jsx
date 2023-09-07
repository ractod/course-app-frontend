import BaseTable from "@components/elements/BaseTable";
import CourseDetailsModal from "@components/elements/CourseDetailsModal";
import EmptyState from "@components/elements/EmptyState";
import When from "@components/elements/When";
import { Chip, IconButton } from "@mui/material";
import RejectCourseModal from "./modals/RejectCourseModal";
import VerifyCourseModal from "./modals/VerifyCourseModal";

import useToggle from "@hooks/useToggle";

import { toPersianDate } from "@utils/converters";

import { adminCoursesTableHeads } from "@constants/tablesHeads";

import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { CgDetailsMore } from "react-icons/cg";

import isEmpty from "lodash/isEmpty";

const statusItems = {
  in_progress: {
    label: "در انتظار",
    color: "info",
  },
  rejected: {
    label: "رد شده",
    color: "error",
  },
  verified: {
    label: "منتشر شده",
    color: "success",
  },
};

const AdminCoursesTable = ({ courses, setCourses }) => {
  if (isEmpty(courses)) {
    return (
      <EmptyState
        title="دوره ای وجود ندارد"
        subTitle="به نظر می رسد با توجه به فیلتر دوره ای وجود ندارد"
      />
    );
  }

  return (
    <BaseTable heads={adminCoursesTableHeads}>
      {courses.map((course) => (
        <TableItem key={course._id} course={course} setCourses={setCourses} />
      ))}
    </BaseTable>
  );
};

export default AdminCoursesTable;

const TableItem = ({ course, setCourses }) => {
  const [isDetailsModalOpen, toggleDetailsModal] = useToggle(false);
  const [isVerifyModalOpen, toggleVerifyModal] = useToggle(false);
  const [isRejectModalOpen, toggleRejectModal] = useToggle(false);

  const details = [
    { label: "نام مدرس", value: course.mentor.fullname },
    { label: "ایمیل مدرس", value: course.mentor.email },
    { label: "عنوان", value: course.title },
    { label: "دسته بندی", value: course.category.title },
    { label: "قیمت", value: course.price },
    { label: "تخفیف", value: course.discount },
    { label: "زمان", value: course.details.duration },
    { label: "وضعیت", value: statusItems[course.status].label },
    { label: "توضیحات", innerHtml: course.details.description },
  ];

  return (
    <tr className="tbody-row">
      <td>{course.title}</td>
      <td>{course.mentor.email}</td>
      <td>{course.price}</td>
      <td>{toPersianDate(course.createdAt)}</td>
      <td>{toPersianDate(course.updatedAt)}</td>
      <td>
        <Chip
          label={statusItems[course.status].label}
          color={statusItems[course.status].color}
          className="text-white"
        />
      </td>
      <td>
        <div className="flex items-center justify-end gap-x-2">
          <When truthy={course.status !== "verified"}>
            <IconButton onClick={toggleVerifyModal}>
              <AiFillLike />
            </IconButton>
          </When>
          <When truthy={course.status !== "rejected"}>
            <IconButton onClick={toggleRejectModal}>
              <AiFillDislike />
            </IconButton>
          </When>
          <IconButton onClick={toggleDetailsModal}>
            <CgDetailsMore />
          </IconButton>
        </div>
      </td>
      <CourseDetailsModal
        open={isDetailsModalOpen}
        onClose={toggleDetailsModal}
        details={details}
        course={course}
      />
      <VerifyCourseModal
        open={isVerifyModalOpen}
        onClose={toggleVerifyModal}
        courseId={course._id}
        setCourses={setCourses}
      />
      <RejectCourseModal
        open={isRejectModalOpen}
        onClose={toggleRejectModal}
        courseId={course._id}
        setCourses={setCourses}
      />
    </tr>
  );
};
