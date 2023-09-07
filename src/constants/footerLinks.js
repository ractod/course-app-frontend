import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";

const footerLinks = [
  {
    title: "دوره ها",
    links: [
      {
        label: "اتاق یادگیری",
        href: "/dashboard/learning-room",
      },
      {
        label: "دوره ها",
        href: "/courses",
      },
      {
        label: "مدرس ها",
        href: "/mentors",
      },
    ],
  },
  {
    title: "صفحات",
    links: [
      {
        label: "خانه",
        href: "/",
      },
      {
        label: "دوره ها",
        href: "/courses",
      },
      {
        label: "مدرس ها",
        href: "/mentors",
      },
      {
        label: "عضویت مدرس",
        href: "/mentor-details",
      },
    ],
  },
  {
    title: "بیشتر",
    links: [
      {
        label: "ثبت نام",
        href: "/auth/signup",
      },
      {
        label: "ورود",
        href: "/auth/signin",
      },
      {
        label: "ارتقا به مدرس",
        href: "/auth/upgrade",
      },
    ],
  },
];

const footerMedias = [
  {
    Icon: AiFillLinkedin,
    href: "/",
    id: "1",
  },
  {
    Icon: AiOutlineInstagram,
    href: "/",
    id: "2",
  },
  {
    Icon: AiOutlineTwitter,
    href: "/",
    id: "3",
  },
  {
    Icon: BiLogoFacebook,
    href: "/",
    id: "4",
  },
];

export { footerLinks, footerMedias };
