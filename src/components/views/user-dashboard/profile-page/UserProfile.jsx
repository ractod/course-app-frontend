"use client";

import { IconButton } from "@mui/material";
import ProfileModal from "./modals/ProfileModal";

import useToggle from "@hooks/useToggle";
import useUser from "@hooks/useUser";

import { toPersianDate } from "@utils/converters";

import { BiSolidPencil } from "react-icons/bi";

const rolesLabel = {
  admin: "ادمین",
  user: "دانشجو",
  mentor: "مدرس",
};

const UserProfile = () => {
  const { user } = useUser();
  const [isProfileModalOpen, toggleProfileModal] = useToggle(false);

  const profileDetails = [
    { label: "نام و نام خانوادگی", value: user?.fullname },
    { label: "ایمیل", value: user?.email },
    { label: "نقش", value: rolesLabel[user?.role] },
    { label: "تاریخ پیوستن", value: toPersianDate(user?.createdAt) },
  ];

  return (
    <section className="-mt-2 py-7 px-5 rounded-[15px] bg-white sm:-mt-6">
      <div className="flex items-center gap-x-1">
        <h2 className="text-lg text-typography font-black md:text-xl lg:text-2xl">
          اطلاعات حساب
        </h2>
        <IconButton onClick={toggleProfileModal} size="small">
          <BiSolidPencil />
        </IconButton>
      </div>
      <div className="mt-4 space-y-[18px]">
        {profileDetails.map((detail) => (
          <p key={detail.label} className="text-sm font-bold text-typography md:text-[15px] lg:text-base">
            {detail.label}{" "}
            <span className="text-mute">{detail.value}</span>
          </p>
        ))}
      </div>
      <ProfileModal open={isProfileModalOpen} onClose={toggleProfileModal} />
    </section>
  );
};

export default UserProfile;
