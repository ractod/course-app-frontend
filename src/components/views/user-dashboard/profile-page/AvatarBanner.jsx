"use client";

import Image from "next/image";

import { IconButton } from "@mui/material";
import AvatarModal from "./modals/AvatarModal";

import useToggle from "@hooks/useToggle";
import useUser from "@hooks/useUser";

import { BiSolidPencil } from "react-icons/bi";

const AvatarBanner = () => {
  const { user } = useUser();
  const [isAvatarModalOpen, toggleAvatarModal] = useToggle(false);

  return (
    <section>
      <div className="rounded-[15px] bg-primary-500">
        <Image
          src="/images/profile-page-pattern.png"
          alt="pattern"
          width={1400}
          height={300}
          priority
          className="w-full h-fit"
        />
      </div>
      <div className="flex items-center gap-x-5 p-2 mx-2 rounded-[15px] bg-white bg-opacity-90 backdrop-blur-md -translate-y-1/2 sm:mx-6 sm:p-4">
        <div className="relative w-fit">
          <Image
            src={user?.avatar || "/images/user-placeholder.png"}
            alt="user avatar"
            width={80}
            height={80}
            className="block aspect-square h-fit w-10 rounded-xl sm:w-[80px] object-cover"
          />
          <IconButton
            onClick={toggleAvatarModal}
            size="small"
            className="absolute left-[-10px] bottom-[-10px] rounded-lg shadow-[-3px_3px_10px_-2px_rgba(0,0,0,0.09)] bg-white hover:bg-gray-100"
            TouchRippleProps={{
              classes: {
                child: "rounded-lg",
              },
            }}
          >
            <BiSolidPencil />
          </IconButton>
        </div>
        <div className="min-w-0">
          <p className="truncate text-base font-black text-typography md:text-[17px] lg:text-lg">
            {user?.fullname}
          </p>
          <p className="truncate text-sm font-medium text-mute md:text-[15px] lg:text-base">
            {user?.email}
          </p>
        </div>
      </div>
      <AvatarModal open={isAvatarModalOpen} onClose={toggleAvatarModal} />
    </section>
  );
};

export default AvatarBanner;
