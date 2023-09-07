"use client";
import { forwardRef } from "react";

import ControlWrapper from "@components/elements/FormControls/ControlWrapper";
import FormInput from "@components/elements/FormControls/FormInput";
import FormSelect from "@components/elements/FormControls/FormSelect";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

import useUser from "@hooks/useUser";

import { couponValidator } from "@utils/validators";

import DatePicker, {
  utils,
} from "@hassanmojab/react-modern-calendar-datepicker";
import { Formik } from "formik"

// used for create and edit coupon
const CouponForm = forwardRef(({ onSubmit, initialValues }, ref) => {
  const { user } = useUser();
  const courses = user?.mentorData.courses || [];
  const coursesOptions = courses.map((course) => ({
    label: course.title,
    value: course._id,
  }));

  return (
    <Formik
      innerRef={ref}
      initialValues={initialValues}
      validationSchema={couponValidator}
      onSubmit={onSubmit}
    >
      {({ values, handleSubmit, setFieldValue, handleChange }) => (
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            name="code"
            label="کد"
            variant="outlined"
            value={values.code}
            placeholder="کد مورد نظر خود را وارد کنید"
          />

          <FormInput
            name="discount"
            label="میزان تخفیف"
            variant="outlined"
            type="number"
            value={values.discount}
            placeholder="عدد مورد نظر خود را وارد کنید"
          />

          <FormInput
            type="number"
            label="تعداد موجود"
            variant="outlined"
            name="inStockCount"
            value={values.inStockCount}
            placeholder="تعداد مجاز را وارد کنید"
          />

          <FormSelect
            multiple
            label="دوره ها"
            name="courses"
            variant="outlined"
            value={values.courses}
            options={coursesOptions}
            placeholder="کد مورد نظر خود را وارد کنید"
          />

          <ControlWrapper label="تاریخ انقضا">
            <DatePicker
              value={values.expireDate}
              onChange={(value) => setFieldValue("expireDate", value)}
              inputClassName="input input-outlined"
              wrapperClassName="w-full"
              inputPlaceholder="انتخاب تاریخ انقضا"
              minimumDate={utils("fa").getToday()}
              locale="fa"
            />
          </ControlWrapper>

          <ControlWrapper label="نوع تخفیف">
            <RadioGroup row name="type" onChange={handleChange} value={values.type}>
              <FormControlLabel
                className="mr-0"
                label="درصد"
                value="percentage"
                control={<Radio />}
              />
              <FormControlLabel
                value="fixed_amount"
                label="مقدار ثابت"
                control={<Radio />}
              />
            </RadioGroup>
          </ControlWrapper>
        </form>
      )}
    </Formik>
  );
});

CouponForm.displayName = "CouponForm";

export default CouponForm;
