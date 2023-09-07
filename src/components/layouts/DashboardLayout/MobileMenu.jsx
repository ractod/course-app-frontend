import { useEffect } from "react";
import { usePathname } from "next/navigation";

import Logo from "@components/elements/Logo";
import { Drawer, IconButton } from "@mui/material";
import Links from "./Links";

// icon
import { FaLongArrowAltRight } from "react-icons/fa";

const MobileMenu = ({ onClose, open, dashboardLinks }) => {
  const pathname = usePathname()

  useEffect(() => {
    if(open) {
      onClose()
    }
  }, [pathname])

  return (
    <Drawer
      onClose={onClose}
      open={open}
      classes={{ paper: "w-[70vw] bg-body rounded-l-2xl" }}
      anchor="right"
      dir="rtl"
    >
      <div className="flex items-center justify-between py-5 px-2">
        <Logo />
        <IconButton onClick={onClose}>
          <FaLongArrowAltRight />
        </IconButton>
      </div>
      <div className="px-4 mt-5">
        <Links dashboardLinks={dashboardLinks} />
      </div>
    </Drawer>
  );
};

export default MobileMenu;
