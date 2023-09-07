"use client";

import { useMemo, useRef } from "react";

import BaseModal from "@components/elements/BaseModal";

import useMutation from "@hooks/useMutation";
import useUser from "@hooks/useUser";

import { toEnDate, toPersianDateObject } from "@utils/converters";

import { updateCoupon } from "@services/mentorServices";

import CouponForm from "../CouponForm";
import omit from "lodash/omit";
import { toast } from "react-toastify";

const EditCouponModal = ({ open, onClose, coupon }) => {
  const { updateUser } = useUser();
  const formRef = useRef();

  const [mutateCreateCoupon, loading] = useMutation(updateCoupon, {
    onSuccess: (data) => {
      toast.success(data.message);
      updateUser((draft) => {
        draft.mentorData.coupons = draft.mentorData.coupons.map((item) =>
          item._id == coupon._id ? data.coupon : item
        );
      });
      onClose();
    },
  });

  const initialValues = useMemo(
    () => ({
      ...omit(coupon, "_id", "__v"),
      courses: coupon.courses.map((course) => course._id),
      expireDate: toPersianDateObject(coupon.expireDate),
    }),
    [coupon]
  );

  const handleSubmit = (formData) => {
    const updatedFormData = {
      ...formData,
      expireDate: toEnDate(formData.expireDate),
    };
    mutateCreateCoupon(updatedFormData, coupon._id);
  };

  return (
    <BaseModal onClose={onClose} open={open}>
      <BaseModal.header title="ویرایش کد تخفیف" onClose={onClose} />
      <BaseModal.content>
        <CouponForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
          ref={formRef}
        />
      </BaseModal.content>
      <BaseModal.actions
        primaryBtnProps={{
          label: "ذخیره",
          onClick: () => formRef.current?.handleSubmit(),
          loading,
        }}
        secondaryBtnProps={{
          label: "دور انداختن",
          onClick: onClose,
        }}
      />
    </BaseModal>
  );
};

export default EditCouponModal;
