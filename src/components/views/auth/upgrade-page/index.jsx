"use client";

import FormInput from "@components/elements/FormControls/FormInput";
import FormSelect from "@components/elements/FormControls/FormSelect";
import FormTextArea from "@components/elements/FormControls/FormTextArea";

import useMutation from "@hooks/useMutation";
import useQuery from "@hooks/useQuery";

import { upgradeValidator } from "@utils/validators";

import { getAllFields } from "@services/FieldsServices";
import { upgradeToMentor } from "@services/userServices";

import { AiFillPhone } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { BsBodyText } from "react-icons/bs";

import { LoadingButton } from "@mui/lab";
import { Formik } from "formik";
import { toast } from "react-toastify"

const initialValues = {
  biography: "",
  experience: "",
  fields: [],
  phoneNumber: "",
};

const UpgradePageTemplate = () => {
  const [fields] = useQuery([], getAllFields);
  const fieldOptions = fields.map((field) => ({
    label: field.title,
    value: field._id,
  }));

  const [mutateUpgrade, loading] = useMutation(upgradeToMentor, {
    onSuccess: (data) => {
      toast.success(data.message);
      window.location.pathname = "/mentor";
    },
  });

  const handleSubmit = (formData) => mutateUpgrade(formData);

  return (
    <Formik
      validationSchema={upgradeValidator}
      onSubmit={handleSubmit}
      initialValues={initialValues}
    >
      {({ values, handleSubmit }) => (
        <form
          onSubmit={handleSubmit}
          className="w-full sm:w-[310px] md:w-[370px] flex flex-col gap-y-4"
        >
          <FormTextArea
            name="biography"
            label="درباره"
            value={values.biography}
            startAdornment={<BsBodyText />}
            placeholder="درباره خود به ما بگویید"
            classes={{ startAdornment: "inset-0 right-[27px] top-0 translate-y-none", textarea: "pr-[50px]" }}
          />

          <FormInput
            name="experience"
            label="میزان تجربه"
            value={values.experience}
            startAdornment={<BiTime />}
            placeholder="مانند یک سال، دو ماه"
            classes={{ startAdornment: "right-[27px]", input: "pr-[50px]" }}
          />

          <FormInput
            type="number"
            name="phoneNumber"
            label="شماره موبایل"
            value={values.phoneNumber}
            startAdornment={<AiFillPhone />}
            placeholder="شماره موبایل خود را وارد کنید"
            classes={{ startAdornment: "right-[27px]", input: "pr-[50px]" }}
          />

          <FormSelect
            multiple
            name="fields"
            label="حوضه های کاری"
            value={values.fields}
            options={fieldOptions}
            classes={{ startAdornment: "right-[27px]", input: "pr-[50px]" }}
          />

          <LoadingButton
            type="submit"
            variant="contained"
            className="w-full mt-[25px] py-[10px]"
            loading={loading}
          >
            ارتقا به مدرس
          </LoadingButton>
        </form>
      )}
    </Formik>
  );
};

export default UpgradePageTemplate;
