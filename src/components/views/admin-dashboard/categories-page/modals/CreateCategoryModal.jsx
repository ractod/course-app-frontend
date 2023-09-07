import { useRef } from "react";

import BaseModal from "@components/elements/BaseModal";

import useMutation from "@hooks/useMutation";

import { createCategory } from "@services/adminServices";

import CategoryForm from "../CategoryForm";
import { toast } from "react-toastify";

const CreateCategoryModal = ({ open, onClose, setCategories }) => {
  const formRef = useRef();

  const [mutateCreateCategory, loading] = useMutation(createCategory, {
    onSuccess: (data) => {
      setCategories((prevState) => [...prevState, data.category]);
      toast.success(data.message);
      onClose();
    },
  });

  return (
    <BaseModal open={open} onClose={onClose}>
      <BaseModal.header title="دسته بندی جدید" onClose={onClose} />
      <BaseModal.content>
        <CategoryForm
          ref={formRef}
          onSubmit={(values) => mutateCreateCategory(values)}
          initialValues={{ title: "", englishTitle: "" }}
        />
      </BaseModal.content>
      <BaseModal.actions
        primaryBtnProps={{
          label: "ساخت",
          onClick: () => formRef.current?.handleSubmit(),
          loading,
        }}
        secondaryBtnProps={{ label: "دور انداختن", onClick: onClose }}
      />
    </BaseModal>
  );
};

export default CreateCategoryModal;
