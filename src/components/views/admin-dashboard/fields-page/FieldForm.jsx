import { forwardRef } from "react";

import FormInput from "@components/elements/FormControls/FormInput";

import { fieldValidator } from "@utils/validators";

import { Formik } from "formik";

const FieldForm = forwardRef(({ initialValues, onSubmit }, ref) => {

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={fieldValidator}
      innerRef={ref} 
    >
      {({ values, handleSubmit }) => (
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            name="title"
            label="نام فارسی"
            variant="outlined"
            value={values.title}
            placeholder="نام فارسی حوضه را وارد کنید"
          />
          <FormInput
            name="englishTitle"
            label="نام انگلیسی"
            variant="outlined"
            value={values.englishTitle}
            placeholder="نام انگلیسی حوضه را وارد کنید"
          />
        </form>
      )}
    </Formik>
  );
});

FieldForm.displayName = "FieldForm";

export default FieldForm;
