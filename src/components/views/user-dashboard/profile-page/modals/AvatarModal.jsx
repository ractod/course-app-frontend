
import BaseModal from "@components/elements/BaseModal";
import FileUploader from "@components/module/FileUploader";

import useMutation from "@hooks/useMutation";
import useUser from "@hooks/useUser";

import { updateAvatar } from "@services/userServices";

import { toast } from "react-toastify";

const AvatarModal = ({ open, onClose }) => {
  const { updateUser } = useUser();

  const [mutateUpdateAvatar] = useMutation(updateAvatar, {
    onSuccess: (data) => {
      toast.success(data.message);
      updateUser(draft => draft.avatar = data.avatar);
    },
  });

  const handleChange = async (file, handleUploadProgress) => {
    const formData = new FormData();
    formData.append("avatar", file);
    mutateUpdateAvatar(formData, handleUploadProgress);
    onClose()
  };

  return (
    <BaseModal open={open} onClose={onClose}>
      <BaseModal.header title="ویرایش عکس پروفایل" onClose={onClose} />
      <BaseModal.content>
        <FileUploader value={null} onChange={handleChange} accept="image/*"  />
      </BaseModal.content>
    </BaseModal>
  );
};

export default AvatarModal;
