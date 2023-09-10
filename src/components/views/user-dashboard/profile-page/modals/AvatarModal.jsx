import { useState } from "react";

import BaseModal from "@components/elements/BaseModal";
import FileUploader from "@components/module/FileUploader";

import useMutation from "@hooks/useMutation";
import useUser from "@hooks/useUser";

import { updateAvatar } from "@services/userServices";

import { toast } from "react-toastify";

const AvatarModal = ({ open, onClose }) => {
  const { updateUser } = useUser();
  const [avatarFile, setAvatarFile] = useState(null);

  const [mutateUpdateAvatar] = useMutation(updateAvatar, {
    onSuccess: (data) => {
      toast.success(data.message);
      updateUser((draft) => (draft.avatar = data.avatar));
      onClose()
    },
  });

  const handleChange = async (file, handleUploadProgress) => {
    setAvatarFile(file);
    const formData = new FormData();
    formData.append("avatar", file);
    mutateUpdateAvatar(formData, handleUploadProgress);
  };

  return (
    <BaseModal open={open} onClose={onClose}>
      <BaseModal.header title="ویرایش عکس پروفایل" onClose={onClose} />
      <BaseModal.content>
        <FileUploader
          value={avatarFile}
          onChange={handleChange}
          accept="image/*"
        />
      </BaseModal.content>
    </BaseModal>
  );
};

export default AvatarModal;
