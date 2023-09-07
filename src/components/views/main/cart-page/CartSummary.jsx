
import CouponForm from "./CouponForm";

import useMutation from "@hooks/useMutation";

import { toPersianNumber } from "@utils/converters";

import { checkout } from "@services/cartServices";

import { MdOutlinePayment } from "react-icons/md";

import { LoadingButton } from "@mui/lab";
import { toast } from "react-toastify";

const CartSummary = ({ cart }) => {
  const [mutateCheckout, loading] = useMutation(checkout, {
    onSuccess: (data) => {
      toast.success(data.message);
      window.location.pathname = "/dashboard/courses";
    },
  });

  return (
    <div className="p-2 rounded-[15px] bg-white sm:p-5">
      <div className="flex items=center gap-x-2">
        <MdOutlinePayment className="text-lg text-mute sm:text-xl" />
        <h4 className="text-sm font-black text-mute  md:text-base ">
          اطلاعات پرداخت
        </h4>
      </div>
      <hr className="divider mt-2 mb-4" />
      <CouponForm cart={cart} />
      <hr className="divider my-4" />
      <div>
        <div className="flex items-center justify-between">
          <p className="font-extrabold text-mute md:text-lg">مبلغ کل</p>
          <p className="font-extrabold text-mute md:text-lg">
            {toPersianNumber(cart.totalPrice)}
          </p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <p className="font-extrabold text-mute md:text-lg">تخفیف</p>
          <p className="font-extrabold text-red-600 md:text-lg">
            {toPersianNumber(cart.discount)}
          </p>
        </div>
      </div>
      <hr className="divider my-4" />
      <div className="flex items-center justify-between">
        <p className="text-sm font-extrabold text-mute md:text-base">
          مبلغ قابل پرداخت
        </p>
        <p className="text-base font-black text-primary-600 md:text-lg">
          {toPersianNumber(cart.priceToPay)}
          <span className="text-xs font-medium text-mute"> تومان </span>
        </p>
      </div>
      <LoadingButton
        onClick={mutateCheckout}
        loading={loading}
        variant="contained"
        className="w-full mt-8"
      >
        پرداخت سفارش
      </LoadingButton>
    </div>
  );
};

export default CartSummary;
