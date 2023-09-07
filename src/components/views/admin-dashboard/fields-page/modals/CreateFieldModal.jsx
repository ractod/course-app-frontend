import { useRef } from "react";

import BaseModal from "@components/elements/BaseModal";

import useMutation from "@hooks/useMutation";

import { createField } from "@services/adminServices";

import FieldForm from "../FieldForm";
import { toast } from "react-toastify";

const CreateFieldModal = ({ open, onClose, setFields }) => {
  const formRef = useRef();

  const [mutateCreateField, loading] = useMutation(createField, {
    onSuccess: (data) => {
      setFields((prevState) => [...prevState, data.field]);
      toast.success(data.message);
      onClose();
    },
  });

  return (
    <BaseModal open={open} onClose={onClose}>
      <BaseModal.header title="حوضه جدید" onClose={onClose} />
      <BaseModal.content>
        <FieldForm
          ref={formRef}
          onSubmit={(values) => mutateCreateField(values)}
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

export default CreateFieldModal;
