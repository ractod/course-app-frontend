

import Link from "next/link";

import { IconButton } from "@mui/material";

import useMutation from "@hooks/useMutation";
import useUser from "@hooks/useUser";

import { toPersianNumber } from "@utils/converters";

import { removeCoupon } from "@services/cartServices";

import { BiSolidCoupon } from "react-icons/bi";
import { CgTrash } from "react-icons/cg";

import _ from "lodash";

const CouponCard = ({
  coupon: { code, discount, type, courses, _id },
  cart,
}) => {
  const { updateUser } = useUser();
  const appliedCourses = _.filter(courses, (course) =>
    _.some(cart.items, { _id: course._id })
  );
  const [mutateRemoveCoupon] = useMutation(removeCoupon, {
    onSuccess: (data) => {
      updateUser(draft => draft.cart = data.cart);
    },
  });


  return (
    <div className="mt-3 py-2 px-4 rounded-[10px] bg-gray-100">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-1">
          <BiSolidCoupon className="text-mute" />
          <p className="mt-1 font-black text-mute">{code}</p>
        </div>
        <IconButton
          onClick={() => mutateRemoveCoupon(_id)}
          size="small"
          className="border border-gray-200 border-solid rounded-xl"
        >
          <CgTrash className="text-red-600" />
        </IconButton>
      </div>
      <hr className="divider mt-2 mb-4" />
      <div>
        <p className="text-sm font-bold text-mute">
          تخفیف:{" "}
          <span className="text-red-600">
            {type == "percentage" && "%"}
            {toPersianNumber(discount)}
          </span>
        </p>
        <p className="mt-2 text-sm font-bold text-mute">
          اعمال شده بر روی:{" "}
          {appliedCourses.map((course) => (
            <Link
              key={course._id}
              href={`/courses/${course._id}`}
              className="text-xs font-medium text-mute transition-colors duration-150 hover:text-primary-500"
            >
              {course.title}،
            </Link>
          ))}
        </p>
      </div>
    </div>
  );
};

export default CouponCard;
