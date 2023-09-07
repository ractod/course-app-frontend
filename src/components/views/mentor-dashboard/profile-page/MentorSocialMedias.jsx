"use client";
import EmptyState from "@components/elements/EmptyState";
import When from "@components/elements/When";
import { IconButton } from "@mui/material";
import EditSocialMediasModal from "./modals/EditSocialMediasModal";

import useToggle from "@hooks/useToggle";
import useUser from "@hooks/useUser";

import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BiSolidPencil } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";

import isEmpty from "lodash/isEmpty";
import pickBy from "lodash/pickBy";

const socialMedias = {
  instagram: {
    icon: <AiOutlineInstagram className="text-pink-600" />,
    label: "اینستاگرام",
  },
  twitter: {
    icon: <AiOutlineTwitter className="text-sky-600" />,
    label: "توییتر",
  },
  facebook: {
    icon: <BiLogoFacebook className="text-indigo-600" />,
    label: "فیس بوک",
  },
  linkedin: {
    icon: <AiFillLinkedin className="text-blue-600" />,
    label: "لینکد این",
  },
};

const SocialMediaItem = ({ name, url }) => (
  <div className="col-span-1">
    <div className="flex items-center gap-x-2">
      <span className="mt-2 text-2xl">{socialMedias[name].icon}</span>
      <p className="text-sm font-extrabold text-[#99a2b2] md:text-[15px] lg:text-base">
        {socialMedias[name].label}
      </p>
    </div>
    <p className="truncate text-sm font-bold text-typography md:text-[15px] lg:text-base">
      {url}
    </p>
  </div>
);

const MentorSocialMedias = () => {
  const { user } = useUser();
  const [isModalOpen, toggleModal] = useToggle(false);
  const existingSocialMedias = pickBy(user.mentorData.socialMedias, Boolean);

  return (
    <section className="mt-10 p-8 rounded-[15px] bg-white">
      <div className="flex items-center gap-x-2">
        <h3 className="text-base text-mute font-black md:text-[17px] lg:text-lg">
          فضای مجازی
        </h3>
        <IconButton onClick={toggleModal}>
          <BiSolidPencil />
        </IconButton>
      </div>
      <When
        truthy={!isEmpty(existingSocialMedias)}
        fallback={
          <EmptyState
            title="فضای مجازی ندارید"
            subTitle="به نظر می رسد فضای مجازی ای اضافه نکردید"
          />
        }
      >
        <div className="grid grid-cols-1 gap-2 mt-4 sm:grid-cols-2 md:grid-cols-4">
          {Object.entries(existingSocialMedias).map(([key, value]) => (
            <SocialMediaItem key={key} name={key} url={value} />
          ))}
        </div>
      </When>
      <EditSocialMediasModal open={isModalOpen} onClose={toggleModal} />
    </section>
  );
};

export default MentorSocialMedias;
