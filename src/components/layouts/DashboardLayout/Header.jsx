"use client";


import { Button, Drawer, IconButton } from "@mui/material";
import MobileMenu from "./MobileMenu";

import useMutation from "@hooks/useMutation";
import useToggle from "@hooks/useToggle";
import useUser from "@hooks/useUser";

// service
import { signout } from "@services/authServices";

import { BiMenuAltRight } from "react-icons/bi";
import { IoMdLogOut } from "react-icons/io";

import { toast } from "react-toastify";

const Header = ({ dashboardLinks }) => {
  const { user, loading } = useUser();
  const [isMenuOpen, toggleMenu] = useToggle(false);
  const [mutateSignout] = useMutation(signout, {
    onSuccess: (data) => {
      toast.success(data.message);
      window.location.pathname = "/auth/signin";
    }
  })

  return (
    <header
      className={`
        sticky top-0 w-full py-5 bg-white xl:hidden z-50 shadow-md
        ${loading ? "blur-sm pointer-events-none" : ""}
      `}
    >
      <div className="container flex items-center">
        <IconButton onClick={toggleMenu}>
          <BiMenuAltRight />
        </IconButton>
        <p className="mr-2 text-sm text-mute font-bold md:text-[15px]">
          سلام؛ {user?.fullname}
        </p>
        <Button
          variant="contained"
          color="error"
          className="mr-auto rounded-full"
          startIcon={<IoMdLogOut />}
          onClick={() => mutateSignout()}
        >
          خروج
        </Button>
        <MobileMenu
          onClose={toggleMenu}
          open={isMenuOpen}
          dashboardLinks={dashboardLinks}
        />
      </div>
    </header>
  );
};

export default Header;
