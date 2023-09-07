import BaseModal from "@components/elements/BaseModal";
import FormInput from "@components/elements/FormControls/FormInput";

import useMutation from "@hooks/useMutation";
import useUser from "@hooks/useUser";

import { socialMediasValidator } from "@utils/validators";

import { updateSocialMedias } from "@services/mentorServices";

import { Formik } from "formik";
import { toast } from "react-toastify";

const EditSocialMediasModal = ({ open, onClose }) => {
  const { user, updateUser } = useUser();

  const [mutateUpdateMedias, loading] = useMutation(updateSocialMedias, {
    onSuccess: (data) => {
      toast.success(data.message);
      updateUser((draft) => {
        draft.mentorData.socialMedias = data.mentor.mentorData.socialMedias;
      });
      onClose();
    },
  });

  const handleSubmit = (formData) => mutateUpdateMedias(formData);

  return (
    <BaseModal open={open} onClose={onClose}>
      <BaseModal.header
        title="ویرایش اطلاعات شخصی"
        onClose={onClose}
      />
      <Formik
        onSubmit={handleSubmit}
        validationSchema={socialMediasValidator}
        initialValues={user.mentorData.socialMedias}
      >
        {({ values, handleSubmit }) => (
          <>
            <BaseModal.content>
              <form onSubmit={handleSubmit} className="space-y-4">
                <FormInput
                  name="instagram"
                  label="اینستاگرام"
                  value={values.instagram}
                  variant="outlined"
                  placeholder="آدرس اینستاگرام خود را وارد کنید"
                />

                <FormInput
                  name="linkedin"
                  label="لینکد این"
                  value={values.linkedin}
                  variant="outlined"
                  placeholder="آدرس لینکد این خود را وارد کنید"
                />

                <FormInput
                  name="facebook"
                  label="فیس بوک"
                  value={values.facebook}
                  variant="outlined"
                  placeholder="آدرس فیس بوک خود را وارد کنید"
                />

                <FormInput
                  name="twitter"
                  label="توییتر"
                  value={values.twitter}
                  variant="outlined"
                  placeholder="آدرس توییتر خود را وارد کنید"
                />
              </form>
            </BaseModal.content>
            <BaseModal.actions
              primaryBtnProps={{
                label: "ذخیره",
                loading,
                onClick: handleSubmit
              }}
              secondaryBtnProps={{
                label: "دور انداختن",
                onClick: onClose,
              }}
            />
          </>
        )}
      </Formik>
    </BaseModal>
  );
};

export default EditSocialMediasModal;
