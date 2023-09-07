import { BiCategory,BiSolidCoupon } from "react-icons/bi"
import { BsBookmarkFill } from "react-icons/bs"
import { CgNotes } from "react-icons/cg"
import { FaUser } from "react-icons/fa"
import { IoBagSharp,IoIosFolderOpen,IoMdHome } from "react-icons/io"
import { MdOutlinePayment, MdWork } from "react-icons/md"
import { PiStudentFill } from "react-icons/pi"

const userDashboardLinks = [
  {
    label: "داشبورد",
    href: "/dashboard",
    icon: <IoMdHome />
  },
  {
    label: "تاریخچه تراکنش ها",
    href: "/dashboard/payments",
    icon: <MdOutlinePayment />
  },
  {
    label: "دوره های من",
    href: "/dashboard/courses",
    icon: <CgNotes />
  },
  {
    label: "اتاق یادگیری",
    href: "/dashboard/learning-room",
    icon: <IoIosFolderOpen />
  },
  {
    label: "دوره های ذخیره شده",
    href: "/dashboard/bookmarks",
    icon: <BsBookmarkFill />
  },
  {
    label: "پروفایل",
    href: "/dashboard/profile",
    icon: <FaUser />
  }
]

const mentorDashboardLinks = [
  {
    label: "داشبورد",
    href: "/mentor",
    icon: <IoMdHome />
  },
  {
    label: "دانشجویان من",
    href: "/mentor/students",
    icon: <PiStudentFill />
  },
  {
    label: "دوره های من",
    href: "/mentor/courses",
    icon: <IoIosFolderOpen />
  },
  {
    label: "کد تخفیف",
    href: "/mentor/coupons",
    icon: <BiSolidCoupon />
  },
  {
    label: "پروفایل",
    href: "/mentor/profile",
    icon: <FaUser />
  }
]

const adminDashboardLinks = [
  {
    label: "داشبورد",
    href: "/admin",
    icon: <IoMdHome />
  },
  {
    label: "کاربران",
    href: "/admin/users",
    icon: <FaUser />
  },
  {
    label: "دوره ها",
    href: "/admin/courses",
    icon: <IoIosFolderOpen />
  },
  {
    label: "دسته بندی ها",
    href: "/admin/categories",
    icon: <BiCategory />
  },
  {
    label: "حوضه ها",
    href: "/admin/fields",
    icon: <MdWork />
  },
]

export { adminDashboardLinks,mentorDashboardLinks, userDashboardLinks }