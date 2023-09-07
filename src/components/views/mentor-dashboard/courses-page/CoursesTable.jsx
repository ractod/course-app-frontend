import Link from "next/link";

import BaseTable from "@components/elements/BaseTable";
import EmptyState from "@components/elements/EmptyState";
import When from "@components/elements/When";
import { Chip, IconButton, Tooltip } from "@mui/material";
import AdminMessageModal from "./modals/AdminMessageModal";
import DeleteCourseModal from "./modals/DeleteCourseModal";
import EditCourseModal from "./modals/EditCourseModal";

import useToggle from "@hooks/useToggle";

import { toPersianDate, toPersianNumber } from "@utils/converters";

import { mentorCoursesTableHeads } from "@constants/tablesHeads";

import { BiSolidMessageError, BiSolidPencil } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { CgDetailsMore } from "react-icons/cg";
import { RiPagesFill } from "react-icons/ri";

import CourseDetailsModal from "../../../elements/CourseDetailsModal";
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

const CoursesTable = ({ courses }) => {
  if (isEmpty(courses)) {
    return (
      <EmptyState
        title="دوره ای وجود ندارد"
        subTitle="در صورت داشتن دوره ای فیلتر مورد نظر را عوض کنید"
      />
    );
  }

  return (
    <BaseTable heads={mentorCoursesTableHeads}>
      {courses.map((course) => (
        <TableItem key={course._id} course={course} />
      ))}
    </BaseTable>
  );
};

export default CoursesTable;

const TableItem = ({
  course,
  course: {
    title,
    price,
    discount,
    createdAt,
    updatedAt,
    status,
    _id,
    statusMessage,
  },
}) => {
  const [isDetailsModalOpen, toggleDetailsModal] = useToggle(false);
  const [isMessageModalOpen, toggleMessageModal] = useToggle(false);
  const [isDeleteModalOpen, toggleDeleteModal] = useToggle(false);
  const [isEditModalOpen, toggleEditModal] = useToggle(false);

  const details = [
    { label: "عنوان", value: course.title },
    { label: "دسته بندی", value: course.category.title },
    { label: "قیمت", value: course.price },
    { label: "تخفیف", value: course.discount },
    { label: "زمان", value: course.details.duration },
    { label: "وضعیت", value: statusItems[course.status].label },
    { label: "امتیاز", value: toPersianNumber(course.details.rate.avrage) },
    { label: "توضیحات", innerHtml: course.details.description },
  ];

  return (
    <tr className="tbody-row">
      <td>{title}</td>
      <td>{toPersianNumber(price)}</td>
      <td>{toPersianNumber(discount)}</td>
      <td>{toPersianDate(createdAt)}</td>
      <td>{toPersianDate(updatedAt)}</td>
      <td>
        <Chip
          label={statusItems[course.status].label}
          color={statusItems[course.status].color}
          className="text-white"
        />
      </td>
      <td>
        <div className="flex items-center justify-end gap-x-2">
          <Tooltip title="جزئیات">
            <IconButton onClick={toggleDetailsModal}>
              <CgDetailsMore />
            </IconButton>
          </Tooltip>
          <Tooltip title="ویرایش">
            <IconButton onClick={toggleEditModal}>
              <BiSolidPencil />
            </IconButton>
          </Tooltip>
          <Tooltip title="حذف">
            <IconButton onClick={toggleDeleteModal}>
              <BsTrash />
            </IconButton>
          </Tooltip>
          <Tooltip title="صفحه دوره">
            <IconButton LinkComponent={Link} href={`/courses/${_id}`}>
              <RiPagesFill />
            </IconButton>
          </Tooltip>
          <When truthy={status === "rejected"}>
            <Tooltip title="پیام ادمین" onClick={toggleMessageModal}>
              <IconButton>
                <BiSolidMessageError />
              </IconButton>
            </Tooltip>
          </When>
        </div>
      </td>
      <CourseDetailsModal
        open={isDetailsModalOpen}
        onClose={toggleDetailsModal}
        details={details}
        course={course}
      />
      <AdminMessageModal
        open={isMessageModalOpen}
        onClose={toggleMessageModal}
        message={statusMessage}
      />
      <DeleteCourseModal
        open={isDeleteModalOpen}
        onClose={toggleDeleteModal}
        courseId={_id}
        courseTitle={title}
      />
      <EditCourseModal
        onClose={toggleEditModal}
        open={isEditModalOpen}
        course={course}
      />
    </tr>
  );
};
