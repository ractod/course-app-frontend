import { useMemo } from "react";

import ControlWrapper from "@components/elements/FormControls/ControlWrapper";
import FormInput from "@components/elements/FormControls/FormInput";
import FormSelect from "@components/elements/FormControls/FormSelect";
import When from "@components/elements/When";
import FileUploader from "@components/module/FileUploader";
import { Button, IconButton } from "@mui/material";
import File from "./File";

import useQuery from "@hooks/useQuery"

import { toPersianNumber } from "@utils/converters";
import { detailsStepValidator } from "@utils/validators";

import { getAllCategories } from "@services/categoriesServices";

import { BsTrash } from "react-icons/bs";
import { RxFileText } from "react-icons/rx"

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Formik } from "formik";

const editorConfig = {
  language: "ar",
  toolbar: {
    removeItems: ["uploadImage", "mediaEmbed", "insertTable"],
  },
};

const DetailsStep = ({ onClose, onNextStep, formData, setFormData }) => {
  const [categories] = useQuery([], getAllCategories);
  const categoryOptions = categories.map((category) => ({
    label: category.title,
    value: category._id,
  }));

  const initialValues = useMemo(
    () => ({
      title: formData.title || "",
      cover: formData.cover || null,
      price: formData.price || 0,
      discount: formData.discount || 0,
      duration: formData.duration || 0,
      category: formData.category || "",
      description: formData.description || "",
    }),
    [formData]
  );

  const handleSubmit = (values) => {
    setFormData((prevState) => ({ ...prevState, ...values }));
    onNextStep();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={detailsStepValidator}
      >
        {({
          setFieldValue,
          values,
          handleSubmit,
          errors,
          touched,
          handleBlur,
          setFieldTouched,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="space-y-4 max-w-[500px] mx-auto">
              <FormInput
                name="title"
                value={values.title}
                placeholder="عنوان دوره خود را وارد کنید"
                variant="outlined"
                label="عنوان"
              />

              <ControlWrapper
                error={errors.cover}
                touched={touched.cover}
                label="عکس دوره"
              >
                <When truthy={!values.cover}>
                  <FileUploader
                    onChange={(file) => setFieldValue("cover", file)}
                    hasButton={false}
                    hasProgress={false}
                    onBlur={handleBlur}
                    accept="image/*"
                  />
                </When>
                <When truthy={!!values.cover}>
                  <File
                    fileName={values.cover?.name || "عکس دوره"}
                    onDelete={() => setFieldValue("cover", null)}
                  />
                </When>
              </ControlWrapper>

              <div className="flex gap-x-5">
                <FormInput
                  name="price"
                  value={values.price}
                  placeholder="قیمت دوره خود را وارد کنید"
                  variant="outlined"
                  type="number"
                  label="قیمت(تومان)"
                />
                <FormInput
                  name="discount"
                  value={values.discount}
                  placeholder="تخفیف دوره خود را وارد کنید"
                  variant="outlined"
                  type="number"
                  label="تخفیف(تومان)"
                />
              </div>

              <FormInput
                name="duration"
                value={values.duration}
                placeholder="مدت زمان دوره شما به ساعت"
                variant="outlined"
                type="number"
                label="مدت زمان"
              />

              <FormSelect
                name="category"
                value={values.category}
                variant="outlined"
                options={categoryOptions}
                label="دسته بندی"
              />

              <ControlWrapper
                error={errors.description}
                touched={touched.description}
                label="توضیحات"
              >
                <CKEditor
                  editor={ClassicEditor}
                  data={values.description}
                  config={editorConfig}
                  onBlur={() => setFieldTouched("description", true)}
                  onChange={(e, editor) =>
                    setFieldValue("description", editor.getData())
                  }
                />
              </ControlWrapper>
            </div>
            <div className="flex items-center justify-between mt-5">
              <Button variant="contained" type="submit">
                مرحله بعد
              </Button>
              <Button
                color="gray"
                variant="contained"
                type="button"
                onClick={onClose}
              >
                دور انداختن
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default DetailsStep;
