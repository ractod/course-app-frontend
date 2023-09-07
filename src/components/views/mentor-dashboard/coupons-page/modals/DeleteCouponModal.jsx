import ConfirmModal from "@components/elements/ConfirmModal";

import useMutation from "@hooks/useMutation";
import useUser from "@hooks/useUser";

import { deleteCoupon } from "@services/mentorServices";

import { toast } from "react-toastify";

const DeleteCouponModal = ({ couponCode, couponId, open, onClose }) => {
  const { updateUser } = useUser();

  const [mutateDeleteCoupon, loading] = useMutation(deleteCoupon, {
    onSuccess: (data) => {
      toast.success(data.message);
      updateUser((draft) => {
        draft.mentorData.coupons = draft.mentorData.coupons.filter(
          (coupon) => coupon._id !== couponId
        );
      });
      onClose()
    },
  });

  return (
    <ConfirmModal
      title={`آیا در حذف کد تخفیف ${couponCode} مطمئن هستید؟`}
      subTitle="عمل حذف کد تخفیف قابل برگشت نخواهد بود"
      open={open}
      onClose={onClose}
      onConfirm={() => mutateDeleteCoupon(couponId)}
      loading={loading}
    />
  );
};

export default DeleteCouponModal;
