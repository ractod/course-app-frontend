import { forwardRef } from "react";

import FormInput from "@components/elements/FormControls/FormInput";

import { categoryValidator } from "@utils/validators";

import { Formik } from "formik";

const CategoryForm = forwardRef(({ initialValues, onSubmit }, ref) => {

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={categoryValidator}
      innerRef={ref} 
    >
      {({ values, handleSubmit }) => (
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            name="title"
            label="نام فارسی"
            variant="outlined"
            value={values.title}
            placeholder="نام فارسی دسته بندی را وارد کنید"
          />
          <FormInput
            name="englishTitle"
            label="نام انگلیسی"
            variant="outlined"
            value={values.englishTitle}
            placeholder="نام انگلیسی دسته بندی را وارد کنید"
          />
        </form>
      )}
    </Formik>
  );
});

CategoryForm.displayName = "CategoryForm";

export default CategoryForm;
