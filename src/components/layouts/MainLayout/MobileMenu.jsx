
import { useEffect } from "react";
// next
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "@components/elements/Logo";
import When from "@components/elements/When";
import { Drawer, IconButton } from "@mui/material";

import useUser from "@hooks/useUser";

import { AiOutlineCloseCircle } from "react-icons/ai";

const MobileMenu = ({ isOpen, toggleIsOpen }) => {
  const { user } = useUser();
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      toggleIsOpen();
    }
  }, [pathname]);

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={toggleIsOpen}
      classes={{ paper: "w-[70vw]" }}
    >
      <div className="flex justify-between px-5 py-3 border-b-2 border-solid itens-center border-b-mute">
        <Logo />
        <IconButton onClick={toggleIsOpen}>
          <AiOutlineCloseCircle />
        </IconButton>
      </div>
      <div className="flex flex-col flex-1 px-5 py-8">
        <ul className="flex flex-col mb-auto gap-y-4">
          <Link href="/" className="font-medium text-typography">
            خانه
          </Link>
          <Link href="/courses" className="font-medium text-typography">
            دوره ها
          </Link>
          <Link href="/mentors" className="font-medium text-typography">
            مدرس ها
          </Link>
          <When truthy={!!user}>
            <Link href="/cart" className="font-medium text-typography">
              سبد خرید
            </Link>
            <Link href="/dashboard" className="font-medium text-typography">
              حساب کاربری
            </Link>
            <When truthy={user?.role == "admin"}>
              <Link href="/admin" className="font-medium text-typography">
                پنل ادمین
              </Link>
            </When>
            <When truthy={user?.role == "mentor"}>
              <Link href="/mentor" className="font-medium text-typography">
                پنل مدرس
              </Link>
            </When>
          </When>
          <When truthy={!user}>
            <Link href="/auth/signup" className="font-medium text-typography">
              ثبت نام
            </Link>
          </When>
        </ul>
      </div>
    </Drawer>
  );
};

export default MobileMenu;
