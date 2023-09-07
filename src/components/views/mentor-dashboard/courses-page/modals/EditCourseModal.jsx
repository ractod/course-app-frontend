import { useMemo } from "react";

import BaseModal from "@components/elements/BaseModal";

import useMutation from "@hooks/useMutation";
import useUser from "@hooks/useUser";

import { updateCourse } from "@services/mentorServices";

import CourseForm from "../courseForm";
import { toast } from "react-toastify";

const EditCourseModal = ({ open, onClose, course }) => {
  const { updateUser } = useUser();

  const initialValues = useMemo(
    () => ({
      title: course.title,
      cover: course.cover,
      price: course.price,
      discount: course.discount,
      category: course.category._id,
      duration: course.details.duration,
      description: course.details.description,
      sessions: course.sessions,
    }),
    [course]
  );

  const [mutateUpload, loading, handleCancelUpload] = useMutation(
    updateCourse,
    {
      onSuccess: (data) => {
        toast.success(data.message);
        updateUser((draft) => {
          const updatedCourses = draft.mentorData.courses.map((item) =>
            item._id == course._id ? data.course : item
          );;
          draft.mentorData.courses = updatedCourses;
        });
        onClose();
      },
      onCancel: () => {
        toast.warn("بارگذاری دوره لفو شد");
      },
    }
  );

  const handleUpload = (formData, handleUploadProgress) => {
    mutateUpload(course._id, formData, handleUploadProgress);
  };

  return (
    <BaseModal open={open} onClose={onClose} maxWidth="md">
      <BaseModal.header title="ویرایش دوره" onClose={onClose} />
      <BaseModal.content>
        <CourseForm
          onClose={onClose}
          onUpload={handleUpload}
          onCancelUpload={handleCancelUpload}
          isUploading={loading}
          initialValues={initialValues}
        />
      </BaseModal.content>
    </BaseModal>
  );
};

export default EditCourseModal;
