"use client"

import Logo from "@components/elements/Logo";
import Links from "./Links";

import useMutation from "@hooks/useMutation";

// service
import { signout } from "@services/authServices";

import { IoMdLogOut } from "react-icons/io";

import { toast } from "react-toastify";

const Sidebar = ({ dashboardLinks }) => {
  const [mutateSignout] = useMutation(signout, {
    onSuccess: (data) => {
      toast.success(data.message)
      window.location.pathname = "/auth/signin"
    }
  }) 

  return (
    <aside className="sticky top-0 h-screen min-w-[250px] hidden flex-col py-10 px-[30px] xl:flex shrink-0">
      <div className="flex justify-center">
        <Logo />
      </div>
      <hr className="divider my-6" />
      <Links dashboardLinks={dashboardLinks} />
      <button onClick={() => mutateSignout()} className="group mt-auto flex items-center gap-x-3 py-3 px-4 cursor-pointer">
        <span
          className="w-[30px] h-[30px] flex items-center justify-center rounded-xl text-lg 
          bg-white text-primary-500 transition-colors duration-300 group-hover:text-red-600"
        >
          <IoMdLogOut />
        </span>
        <span className="text-mute text-base font-bold transition-colors duration-300 group-hover:text-red-600">
          خروج
        </span>
      </button>
    </aside>
  );
};

export default Sidebar;
