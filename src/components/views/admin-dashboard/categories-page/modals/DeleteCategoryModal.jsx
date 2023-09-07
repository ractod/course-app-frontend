import ConfirmModal from "@components/elements/ConfirmModal";

import useMutation from "@hooks/useMutation";

import { deleteCategory } from "@services/adminServices";

import { toast } from "react-toastify";

const DeleteCategoryModal = ({ open, onClose, category, setCategories }) => {
  const [mutateDeleteModal, loading] = useMutation(deleteCategory, {
    onSuccess: (data) => {
      setCategories((prevState) =>
        prevState.filter((item) => item._id !== category._id)
      );
      onClose();
      toast.success(data.message);
    },
  });

  return (
    <ConfirmModal
      title={`آیا از حذف دسته بندی (${category.title}) مطمئن هستید؟`}
      subTitle="عمل حذف دسته بندی قابل بازگشت نخواهد بود"
      open={open}
      onClose={onClose}
      loading={loading}
      onConfirm={() => mutateDeleteModal(category._id)}
    />
  );
};

export default DeleteCategoryModal;
