"use client";
import { IconButton } from "@mui/material";
import EditMentorProfileModal from "./modals/EditMentorProfileModal";

import useToggle from "@hooks/useToggle";
import useUser from "@hooks/useUser";

import { BiSolidPencil } from "react-icons/bi";

const MentorProfile = () => {
  const [isModalOpen, toggleModal] = useToggle(false);
  const { user } = useUser();
  const mentorData = user?.mentorData

  const profileDetails = [
    { label: "نام و نام خانوادگی",  value: user?.fullname,},
    { label: "ایمیل", value: user?.email,},
    { label: "شماره موبایل",value: mentorData.phoneNumber,},
    { label: "تجربه",value: mentorData.experience,},
    { 
      label: "حوضه های کاری", 
      value: mentorData.fields.map((field) => field.title).join("، "), 
    },
    { label: "درباره",value: mentorData.biography,},
  ];

  return (
    <section className="mt-10 p-8 rounded-[15px] bg-white">
      <div className="flex items-center gap-x-2">
        <h3 className="text-base text-mute font-black md:text-lg lg:text-lg">
          اطلاعات شخصی
        </h3>
        <IconButton onClick={toggleModal}>
          <BiSolidPencil />
        </IconButton>
      </div>
      <div className="grid grid-cols-1 gap-7 mt-4 md:grid-cols-3">
        {profileDetails.map((detail) => (
          <DetailItem key={detail.label} {...detail} />
        ))}
      </div>
      <EditMentorProfileModal open={isModalOpen} onClose={toggleModal} />
    </section>
  );
};

export default MentorProfile;

const DetailItem = ({ label, value }) => (
  <div className="col-span-1 even:md:col-span-2">
    <p className="text-sm font-extrabold text-[#99a2b2] md:text-[15px] lg:text-base">
      {label}
    </p>
    <p className="mt-2 text-sm font-bold text-typography md:text-[15px] lg:text-base">
      {value}
    </p>
  </div>
);