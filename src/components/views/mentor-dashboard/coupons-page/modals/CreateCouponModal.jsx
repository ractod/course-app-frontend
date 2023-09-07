"use client";

import { useRef } from "react"

import BaseModal from "@components/elements/BaseModal";

import useFormData from "@hooks/useFormData";
import useMutation from "@hooks/useMutation";
import useUser from "@hooks/useUser";

import { toEnDate } from "@utils/converters";
import { couponValidator } from "@utils/validators";

import { createCoupon } from "@services/mentorServices";

import CouponForm from "../CouponForm";
import { utils } from "@hassanmojab/react-modern-calendar-datepicker";
import { toast } from "react-toastify";

const initialValues = {
  code: "",
  discount: "",
  inStockCount: "",
  expireDate: utils("fa").getToday(),
  courses: [],
  type: "percentage",
};

const CreateCouponModal = ({ open, onClose }) => {
  const { updateUser } = useUser();
  const formRef = useRef();

  const [mutateCreateCoupon, loading] = useMutation(createCoupon, {
    onSuccess: (data) => {
      toast.success(data.message);
      updateUser((draft) => draft.mentorData.coupons.push(data.coupon));
      onClose();
    },
  });

  const handleSubmit = (formData) => {
    const updatedFormData = {
      ...formData,
      expireDate: toEnDate(formData.expireDate),
    };
    mutateCreateCoupon(updatedFormData);
  };

  return (
    <BaseModal onClose={onClose} open={open}>
      <BaseModal.header title="ساخت کد تخفیف" onClose={onClose} />
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

export default CreateCouponModal;
