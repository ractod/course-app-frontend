import ConfirmModal from "@components/elements/ConfirmModal";

import useMutation from "@hooks/useMutation";
import useUser from "@hooks/useUser";

import { deleteCourse } from "@services/mentorServices";

import { toast } from "react-toastify";

const DeleteCourseModal = ({ courseId, open, onClose, courseTitle }) => {
  const { updateUser } = useUser();

  const [mutateDeleteCourse, loading] = useMutation(deleteCourse, {
    onSuccess: (data) => {
      toast.success(data.message);
      updateUser((draft) => {
        const updatedCourses = draft.mentorData.courses.filter((item) => item._id !== courseId)
        draft.mentorData.courses = updatedCourses;
      });
      onClose()
    },
  });

  return (
    <ConfirmModal
      open={open}
      onClose={onClose}
      title={`آیا از حذف دوره ${courseTitle} مطمئن هستید؟`}
      subTitle="دوره شما فقط از صفحه دوره ها حذف می شود ولی همچنان برای دانشجویان باقی خواهد ماند"
      onConfirm={() => mutateDeleteCourse(courseId)}
      loading={loading}
    />
  );
};

export default DeleteCourseModal;
