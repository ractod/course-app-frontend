import { useMemo } from "react";
import { useRef } from "react";
import { useEffect } from "react";

import BaseModal from "@components/elements/BaseModal";

import useMutation from "@hooks/useMutation";

import { updateCategory } from "@services/adminServices";

import CategoryForm from "../CategoryForm";
import { toast } from "react-toastify";

const EditCategoryModal = ({ open, onClose, category, setCategories }) => {
  const formRef = useRef(null);
  const initialValues = useMemo(
    () => ({
      title: category.title,
      englishTitle: category.englishTitle,
    }),
    [category]
  );

  const [mutateUpdateCategory, loading] = useMutation(updateCategory, {
    onSuccess: (data) => {
      setCategories((prevState) =>
        prevState.map((item) =>
          item._id === category._id ? data.category : item
        )
      );
      toast.success(data.message);
      onClose();
    },
  });
  
  return (
    <BaseModal open={open} onClose={onClose}>
      <BaseModal.header title="ویرایش دسته بندی" onClose={onClose} />
      <BaseModal.content>
        <CategoryForm
          ref={formRef}
          initialValues={initialValues}
          onSubmit={(values) => mutateUpdateCategory(category._id, values)}
        />
      </BaseModal.content>
      <BaseModal.actions
        primaryBtnProps={{
          label: "ذخیره",
          onClick: () => formRef.current?.handleSubmit(),
          loading
        }}
        secondaryBtnProps={{
          label: "دور انداختن",
          onClick: onClose,
        }}
      />
    </BaseModal>
  );
};

export default EditCategoryModal;
