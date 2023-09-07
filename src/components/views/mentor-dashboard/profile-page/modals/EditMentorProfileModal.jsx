import { useMemo } from "react";

import BaseModal from "@components/elements/BaseModal";
import FormInput from "@components/elements/FormControls/FormInput";
import FormSelect from "@components/elements/FormControls/FormSelect";
import FormTextArea from "@components/elements/FormControls/FormTextArea";

import useMutation from "@hooks/useMutation";
import useQuery from "@hooks/useQuery";
import useUser from "@hooks/useUser";

import { mentorProfileValidator } from "@utils/validators";

import { getAllFields } from "@services/FieldsServices";
import { updateMentorProfile } from "@services/mentorServices";

import { Formik } from "formik";
import isEqual from "lodash/isEqual"
import { toast } from "react-toastify";

const EditPersonalInfoModal = ({ open, onClose }) => {
  const { user, updateUser } = useUser();
  const [fields] = useQuery([], getAllFields);
  const fieldsOptions = fields.map((field) => ({
    label: field.title,
    value: field._id,
  }));

  const initialValues = useMemo(
    () => ({
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.mentorData.phoneNumber,
      experience: user.mentorData.experience,
      fields: user.mentorData.fields.map((field) => field._id),
      biography: user.mentorData.biography,
    }),
    [user]
  );

  const [mutateUpdateProfile, loading] = useMutation(updateMentorProfile, {
    onSuccess: (data) => {
      toast.success(data.message);
      updateUser((draft) => {
        draft.mentorData = data.mentor.mentorData;
        draft.fullname = data.mentor.fullname
        draft.email = data.mentor.email
      });
      onClose();
    },
  });

  const handleSubmit = (formData) => mutateUpdateProfile(formData);

  return (
    <BaseModal open={open} onClose={onClose}>
      <BaseModal.header
        title="ویرایش اطلاعات شخصی"
        onClose={onClose}
      />
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={mentorProfileValidator}
      >
        {({ values, handleSubmit }) => (
          <> 
            <BaseModal.content>
              <form onSubmit={handleSubmit} className="space-y-4">
                <FormInput
                  name="fullname"
                  label="نام و نام خانوادگی"
                  value={values.fullname}
                  variant="outlined"
                  placeholder="نام و نام خانوادگی خود را وارد کنید"
                />

                <FormInput
                  name="email"
                  label="ایمیل"
                  value={values.email}
                  variant="outlined"
                  placeholder="ایمیل خود را وارد کنید"
                />

                <FormInput
                  name="phoneNumber"
                  label="شماره موبایل"
                  type="number"
                  value={values.phoneNumber}
                  variant="outlined"
                  placeholder="شماره موبایل خود را وارد کنید"
                />

                <FormInput
                  name="experience"
                  label="تجربه"
                  value={values.experience}
                  variant="outlined"
                  placeholder="مانند دو ماه، یک سال"
                />

                <FormSelect
                  multiple
                  name="fields"
                  label="حوضه های کاری"
                  variant="outlined"
                  value={values.fields}
                  options={fieldsOptions}
                />

                <FormTextArea
                  name="biography"
                  label="درباره"
                  variant="outlined"
                  value={values.biography}
                  placeholder="درباره خود به ما بگویید"
                />
              </form>
            </BaseModal.content>
            <BaseModal.actions
              primaryBtnProps={{
                label: "ذخیره",
                loading,
                disabled: isEqual(values, initialValues),
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

export default EditPersonalInfoModal;
