"use client";
import Link from "next/link";

import When from "@components/elements/When";
import AddToCartBtn from "@components/module/AddToCartBtn";
import { Rating } from "@mui/material";

import useUser from "@hooks/useUser";

import { toPersianDate, toPersianNumber } from "@utils/converters";

const Details = ({
  course: { details, discount, price, sessions, mentor, category, _id },
}) => {
  const { user } = useUser();
  const isPurchased = () => user?.purchasedCourses.some((item) => item._id == _id);

  return (
    <div className="lg:min-w-[400px]">
      <div className="py-[30px] px-[20px] rounded-[10px] space-y-3 bg-white">
        <div className="flex items-center justify-between">
          <p className="text-base font-black text-mute md:text-lg lg:text-xl">
            قیمت
          </p>
          <div className="flex items-center gap-x-2">
            <span className="text-[15px] font-black lg:text-lg text-primary-500 md:text-base">
              {toPersianNumber((price - discount))}{" "}
              <span className="text-xs font-medium text-mute">تومان</span>
            </span>
            <When truthy={!!discount}>
              <span className="text-sm font-bold line-through text-mute">
                {toPersianNumber(price)}
              </span>
            </When>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-base font-black text-mute md:text-lg lg:text-xl">
            مدرس
          </p>
          <Link
            href={`/mentors/${mentor._id}`}
            className="text-sm font-medium text-mute md:text-[14px] lg:text-base transition-all hover:text-primary-500"
          >
            {mentor.fullname}
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-base font-black text-mute md:text-lg lg:text-xl">
            تعداد جلسات
          </p>
          <p className="text-[15px] font-medium lg:text-lg text-mute md:text-base">
            {toPersianNumber(sessions.length)} جلسه
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-base font-black text-mute md:text-lg lg:text-xl">
            زمان
          </p>
          <p className="text-[15px] font-medium lg:text-lg text-mute md:text-base">
            {details.duration}{" "}ساعت
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-base font-black text-mute md:text-lg lg:text-xl">
            دسته بندی
          </p>
          <p className="text-[15px] font-medium lg:text-lg text-mute md:text-base">
            {category.title}
          </p>
        </div>
      </div>
      {isPurchased() ? (
        <Link
          href="/dashboard"
          className="block mt-5 py-2 rounded-[15px] text-center text-sm font-bold text-primary-500 bg-[#E4E2F4] 
          transition-colors duration-200 ease-out hover:bg-primary-600 hover:text-[#E4E2F4]"
        >
          خریداری شده. ادامه یادگیری؟
        </Link>
      ) : (
        <AddToCartBtn className="w-full mt-5" _id={_id} />
      )}
    </div>
  );
};

export default Details;
