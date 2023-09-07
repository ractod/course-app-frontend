import { AiFillLike } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

import BaseModal from "../BaseModal";

const variants = {
  success: {
    icon: <AiFillLike className="text-xl text-green-500  md:text-2xl lg:text-3xl" />,
    btnColor: "success",
    iconBgColor: "bg-green-100",
  },
  error: {
    icon: <BsTrash className="text-xl text-red-500  md:text-2xl lg:text-3xl" />,
    btnColor: "error",
    iconBgColor: "bg-red-100",
  },
};

const ConfirmModal = ({
  title,
  subTitle,
  onConfirm,
  open,
  onClose,
  loading,
  variant = "error",
}) => {
  return (
    <BaseModal open={open} onClose={onClose}>
      <BaseModal.content>
        <div className="flex flex-col items-center text-center">
          <span
            className={`aspect-square w-10 flex items-center justify-center rounded-full ${variants[variant].iconBgColor} md:w-16 lg:w-20`}
          >
            {variants[variant].icon}
          </span>
          <h4 className="mt-4 text-lg font-black text-typography md:text-xl lg:text-xl">
            {title}
          </h4>
          <p className="mt-2 text-sm font-medium text-mute md:text-[15px] lg:text-base">
            {subTitle}
          </p>
        </div>
      </BaseModal.content>
      <BaseModal.actions
        primaryBtnProps={{
          label: "مطمئنم",
          onClick: onConfirm,
          color: variants[variant].btnColor,
          loading,
        }}
        secondaryBtnProps={{
          label: "لغو",
          onClick: onClose,
        }}
      />
    </BaseModal>
  );
};

export default ConfirmModal;
