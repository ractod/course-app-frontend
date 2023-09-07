
import { useMemo } from "react";

import BaseModal from "@components/elements/BaseModal";
import FormInput from "@components/elements/FormControls/FormInput";

import useMutation from "@hooks/useMutation";
import useUser from "@hooks/useUser";

import { userProfileValidator } from "@utils/validators";

import { updateUserProfile } from "@services/userServices";

import { Formik } from "formik";
import isEqual from "lodash/isEqual";
import { toast } from "react-toastify";

const ProfileModal = ({ open, onClose }) => {
  const { user, updateUser } = useUser();

  const [mutateUpdateProfile, loading] = useMutation(updateUserProfile, {
    onSuccess: (data) => {
      toast.success(data.message);
      onClose();
      updateUser((draft) => {
        draft.fullname = data.user.fullname;
        draft.email = data.user.email;
      });
    },
  });

  const initialValues = useMemo(
    () => ({
      fullname: user.fullname,
      email: user.email,
    }),
    [user]
  );

  const handleModalClose = () => {
    onClose();
    resetForm();
  };

  const handleSubmit = (values) => {
    mutateUpdateProfile(values);
  };

  return (
    <BaseModal open={open} onClose={handleModalClose}>
      <BaseModal.header title="ویرایش اطلاعات" onClose={handleModalClose} />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={userProfileValidator}
      >
        {({ values, handleSubmit }) => (
          <>
            <BaseModal.content>
              <form onSubmit={handleSubmit} className="space-y-6">
                <FormInput
                  name="fullname"
                  variant="outlined"
                  label="نام و نام خانوادگی"
                  value={values.fullname}
                  placeholder="نام و نام خانوادگی خود را وارد کنید"
                />

                <FormInput
                  name="email"
                  label="ایمیل"
                  type="email"
                  variant="outlined"
                  value={values.email}
                  placeholder="ایمیل خود را وارد کنید"
                />
              </form>
            </BaseModal.content>
            <BaseModal.actions
              primaryBtnProps={{
                label: "ذخیره",
                onClick: handleSubmit,
                disabled: isEqual(values, initialValues),
                loading,
              }}
              secondaryBtnProps={{
                label: "دور انداختن",
                onClick: handleModalClose,
              }}
            />
          </>
        )}
      </Formik>
    </BaseModal>
  );
};

export default ProfileModal;
