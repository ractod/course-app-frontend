import { useMemo } from "react";
import { useRef } from "react";

import BaseModal from "@components/elements/BaseModal";

import useMutation from "@hooks/useMutation";

import { updateField } from "@services/adminServices";

import FieldForm from "../fieldForm";
import { toast } from "react-toastify";

const EditFieldModal = ({ open, onClose, field, setFields }) => {
  const formRef = useRef(null);
  const initialValues = useMemo(
    () => ({
      title: field.title,
      englishTitle: field.englishTitle,
    }),
    [field]
  );

  const [mutateUpdateField, loading] = useMutation(updateField, {
    onSuccess: (data) => {
      setFields((prevState) =>
        prevState.map((item) =>
          item._id === field._id ? data.field : item
        )
      );
      toast.success(data.message);
      onClose();
    },
  });
  
  return (
    <BaseModal open={open} onClose={onClose}>
      <BaseModal.header title="ویرایش حوضه" onClose={onClose} />
      <BaseModal.content>
        <FieldForm
          ref={formRef}
          initialValues={initialValues}
          onSubmit={(values) => mutateUpdateField(field._id, values)}
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

export default EditFieldModal;
