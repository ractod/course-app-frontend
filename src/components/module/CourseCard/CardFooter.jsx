"use client";


import Link from "next/link";

import When from "@components/elements/When";

import useUser from "@hooks/useUser";

import { toPersianNumber } from "@utils/converters";

import AddToCartBtn from "../AddToCartBtn";
import some from "lodash/some";

const CardFooter = ({ course: { price, discount, _id } }) => {
  const { user } = useUser();
  const isPurchased = some(user?.purchasedCourses, { _id })

  if (isPurchased) {
    return (
      <Link
        href="/dashboard"
        className="block py-2 rounded-[15px] text-center text-sm font-bold text-primary-500 bg-[#E4E2F4] 
        transition-colors duration-200 ease-out hover:bg-primary-500 hover:text-[#E4E2F4]"
      >
        خریداری شده. ادامه یادگیری؟
      </Link>
    );
  }

  return (
    <div className="flex items-center justify-between">
      <AddToCartBtn _id={_id} className="py-[10px] px-[20px]" />
      <div>
        <When truthy={!!discount}>
          <div className="flex items-center gap-x-2">
            <span className="text-sm font-bold line-through text-mute">
              {toPersianNumber(price)}
            </span>
            <span className="py-0.5 px-2 text-xs font-bold text-white bg-rose-500 rounded-[10px]">
              {toPersianNumber(Math.round((discount / price) * 100))}%
            </span>
          </div>
        </When>
        <span className="mt-1 text-[15px] font-black lg:text-lg text-typography md:text-base">
          {toPersianNumber(price - discount)}{" "}
          <span className="text-xs font-medium text-mute">تومان</span>
        </span>
      </div>
    </div>
  );
};

export default CardFooter;
