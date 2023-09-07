import Link from "next/link";

import When from "@components/elements/When";

import useUser from "@hooks/useUser";

import { toPersianNumber } from "@utils/converters";

import { BiShoppingBag, BiUserCircle } from "react-icons/bi";
import { BsFillShieldFill } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";

const HeaderUserNavigations = () => {
  const {user} = useUser()
  const cart = user?.cart || null

  return (
    <>
      <When truthy={!!user}>
        <div className="max-lg:hidden flex items-center gap-x-[10px]">
          <BiUserCircle className="text-3xl text-primary-500" />
          <Link href="/dashboard" className="font-bold text-typography">
            حساب کاربری
          </Link>
        </div>
        <div className="max-lg:hidden flex items-center gap-x-[10px]">
          <BiShoppingBag className="text-3xl text-secondary-500" />
          <Link href="/cart" className="font-bold text-typography">
            سبد خرید ({toPersianNumber(cart?.items.length || 0)})
          </Link>
        </div>
        <When truthy={user?.role == "admin"}>
          <div className="max-lg:hidden flex items-center gap-x-[10px]">
            <BsFillShieldFill className="text-3xl text-blue-900" />
            <Link href="/admin" className="font-bold text-typography">
              پنل ادمین
            </Link>
          </div>
        </When>
        <When truthy={user?.role == "mentor"}>
          <div className="max-lg:hidden flex items-center gap-x-[10px]">
            <FaChalkboardTeacher className="text-3xl text-blue-900" />
            <Link href="/mentor" className="font-bold text-typography">
              پنل مدرس
            </Link>
          </div>
        </When>
      </When>
      <When truthy={!user}>
        <div className="max-lg:hidden flex items-center gap-x-[10px]">
          <BiUserCircle className="text-3xl text-primary-500" />
          <Link href="/auth/signup" className="font-bold text-typography">
            ثبت نام
          </Link>
        </div>
      </When>
    </>
  );
};

export default HeaderUserNavigations;
