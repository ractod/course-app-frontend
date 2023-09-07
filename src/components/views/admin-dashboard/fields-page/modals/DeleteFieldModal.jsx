import ConfirmModal from "@components/elements/ConfirmModal";

import useMutation from "@hooks/useMutation";

import { deleteField } from "@services/adminServices";

import { toast } from "react-toastify";

const DeleteFieldModal = ({ open, onClose, field, setFields }) => {
  const [mutateDeleteField, loading] = useMutation(deleteField, {
    onSuccess: (data) => {
      setFields((prevState) =>
        prevState.filter((item) => item._id !== field._id)
      );
      onClose();
      toast.success(data.message);
    },
  });

  return (
    <ConfirmModal
      title={`آیا از حذف حوضه (${field.title}) مطمئن هستید؟`}
      subTitle="عمل حذف حوضه قابل بازگشت نخواهد بود"
      open={open}
      onClose={onClose}
      loading={loading}
      onConfirm={() => mutateDeleteField(field._id)}
    />
  );
};

export default DeleteFieldModal;
