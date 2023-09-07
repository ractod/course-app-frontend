import BaseModal from "@components/elements/BaseModal";

import useMutation from "@hooks/useMutation";
import useUser from "@hooks/useUser";

import { createCourse } from "@services/mentorServices";

import CourseForm from "../courseForm";
import { toast } from "react-toastify";

const CreateCourseModal = ({ open, onClose, course }) => {
  const {updateUser} = useUser()

  const [mutateUpload, loading, handleCancelUpload] = useMutation(
    createCourse,
    {
      onSuccess: (data) => {
        toast.success(data.message);
        updateUser((draft) => draft.mentorData.courses.push(data.course));
        onClose();
      },
      onCancel: () => {
        toast.warn("بارگذاری دوره لفو شد");
      },
    }
  );

  const handleUpload = (formData, handleUploadProgress) => {
    mutateUpload(formData, handleUploadProgress);
  };

  return (
    <BaseModal open={open} onClose={onClose} className="max-w-[1000px]">
      <BaseModal.header title="ساخت دوره جدید" onClose={onClose} />
      <BaseModal.content>
        <CourseForm
          onClose={onClose}
          onUpload={handleUpload}
          onCancelUpload={handleCancelUpload}
          isUploading={loading}
        />
      </BaseModal.content>
    </BaseModal>
  );
};

export default CreateCourseModal;
