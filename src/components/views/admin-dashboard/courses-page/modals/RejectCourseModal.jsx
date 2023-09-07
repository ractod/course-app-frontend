import BaseModal from "@components/elements/BaseModal";
import FormTextArea from "@components/elements/FormControls/FormTextArea";

import useMutation from "@hooks/useMutation";

import { rejectCourseValidator } from "@utils/validators";

import { rejectCourse } from "@services/adminServices";

import { Formik } from "formik";
import { toast } from "react-toastify";

const RejectCourseModal = ({ open, onClose, courseId, setCourses }) => {
  const [mutateRejectCourse, loading] = useMutation(rejectCourse, {
    onSuccess: (data) => {
      setCourses((prevState) =>
        prevState.map((item) => (item._id === courseId ? data.course : item))
      );
      onClose();
      toast.success(data.message);
    },
  });

  const handleSubmit = (values) => {
    mutateRejectCourse(courseId, values.statusMessage);
  };

  return (
    <BaseModal open={open} onClose={onClose}>
      <BaseModal.header title="رد کردن دوره" onClose={onClose} />
      <Formik
        initialValues={{ statusMessage: "" }}
        onSubmit={handleSubmit}
        validationSchema={rejectCourseValidator}
      >
        {({ values, handleSubmit }) => (
          <>
            <BaseModal.content>
              <form onSubmit={handleSubmit}>
                <FormTextArea
                  name="statusMessage"
                  label="توضیحات"
                  value={values.statusMessage}
                  placeholder="درمورد دلیلی خود توضیح دهید"
                  variant="outlined"
                />
              </form>
            </BaseModal.content>
            <BaseModal.actions
              primaryBtnProps={{
                label: "رد کردن",
                onClick: handleSubmit,
                loading,
              }}
              secondaryBtnProps={{
                label: "لغو",
              }}
            />
          </>
        )}
      </Formik>
    </BaseModal>
  );
};

export default RejectCourseModal;
