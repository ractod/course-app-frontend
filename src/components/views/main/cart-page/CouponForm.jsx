"use client";

import { useRef } from "react";

import FormInput from "@components/elements/FormControls/FormInput";
import CouponCard from "./CouponCard";

import useMutation from "@hooks/useMutation";
import useUser from "@hooks/useUser";

// service
import { applyCoupon } from "@services/cartServices";

import { LoadingButton } from "@mui/lab";
import { Formik } from "formik";

const CouponForm = ({ cart }) => {
  const { updateUser } = useUser();
  const formRef = useRef()

  const [mutateApplyCoupon, loading] = useMutation(applyCoupon, {
    onSuccess: (data) => {
      updateUser((draft) => (draft.cart = data.cart));
      formRef.current?.handleReset()
    },
  });

  const handleSubmit = (values) => {
    mutateApplyCoupon(values.code);
  };

  return (
    <div>
      <p className="font-medium text-mute mb-2"> کد تخفیف </p>
      <Formik innerRef={formRef} onSubmit={handleSubmit} initialValues={{ code: "" }}>
        {({ values, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <FormInput
              name="code"
              variant="outlined"
              value={values.code}
              placeholder="کد تخفیف را وارد کنید"
              endAdornment={
                <LoadingButton
                  loading={loading}
                  type="submit"
                  variant="contained"
                  className="py-1 px-2"
                >
                  اعمال
                </LoadingButton>
              }
            />
          </form>
        )}
      </Formik>
      <div className="mt-4 space-y-2">
        {cart.coupons.map((coupon) => (
          <CouponCard key={coupon._id} coupon={coupon} cart={cart} />
        ))}
      </div>
    </div>
  );
};

export default CouponForm;
