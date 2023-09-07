import ConfirmModal from "@components/elements/ConfirmModal";

import useMutation from "@hooks/useMutation";

import { verifyCourse } from "@services/adminServices";

import { toast } from "react-toastify";

const VerifyCourseModal = ({ open, onClose, courseId, setCourses }) => {
  
  const [mutateVerifyCourse, loading] = useMutation(verifyCourse, {
    onSuccess: (data) => {
      setCourses((prevState) =>
        prevState.map((item) => (item._id === courseId ? data.course : item))
      );
      onClose();
      toast.success(data.message);
    },
  });

  return (
    <ConfirmModal
      title="آیا از تایید و انتشار این دوره مطمئن هستید؟"
      subTitle="بعدا می توانید آن را رد کنید"
      open={open}
      onClose={onClose}
      loading={loading}
      variant="success"
      onConfirm={() => mutateVerifyCourse(courseId)}
    />
  );
};

export default VerifyCourseModal;
