import ConfirmModal from "@components/elements/ConfirmModal";

import useMutation from "@hooks/useMutation";

import { deleteUserById } from "@services/adminServices";

import { toast } from "react-toastify";

const DeleteUserModal = ({ open, onClose, user, setUsers }) => {
  const [mutateDeleteUser, loading] = useMutation(deleteUserById, {
    onSuccess: (data) => {
      setUsers((prevState) =>
        prevState.filter((item) => item._id !== user._id)
      );
      toast.success(data.message);
      onClose();
    },
  });

  return (
    <ConfirmModal
      title={`آیا از حذف کاربر ${user.fullname} با ایمیل ${user.email} مطمئن هستید؟`}
      subTitle="عمل حذف کاربر قابل بازگشت نخواهد بود"
      open={open}
      onClose={onClose}
      loading={loading}
      onConfirm={() => mutateDeleteUser(user._id)}
    />
  );
};

export default DeleteUserModal;
