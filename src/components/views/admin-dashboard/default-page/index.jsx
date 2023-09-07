"use client";

import DotsLoading from "@components/elements/DotsLoading";
import Stat from "@components/elements/Stat";
import Payments from "./Payments";

import useQuery from "@hooks/useQuery";

import { getOverview } from "@services/adminServices";

import { BiCategory, BiTimeFive } from "react-icons/bi";
import { FaChalkboardTeacher, FaUser } from "react-icons/fa";
import { IoIosFolderOpen } from "react-icons/io";
import { MdOutlinePayment, MdWork } from "react-icons/md";

const AdminDefaultPage = () => {
  const [data, { loading }] = useQuery({}, getOverview);
  
  const stats = [
    {
      label: "کاربران",
      value: data.usersCount,
      icon: <FaUser />,
      href: "/admin/users",
    },
    {
      label: "مدرسین",
      value: data.mentorsCount,
      icon: <FaChalkboardTeacher />,
      href: "/admin/users",
    },
    {
      label: "دوره ها",
      value: data.coursesCount,
      icon: <IoIosFolderOpen />,
      href: "/admin/courses",
    },
    {
      label: "در انتظار تایید",
      value: data.inProgressCount,
      icon: <BiTimeFive />,
      href: "/admin/courses",
    },
    {
      label: "دسته بندی ها",
      value: data.categoriesCount,
      icon: <BiCategory />,
      href: "/admin/categories",
    },
    {
      label: "حوضه ها",
      value: data.fieldsCount,
      icon: <MdWork /> ,
      href: "/admin/fields",
    },
    {
      label: "تراکنش ها",
      value: data.paymentsCount,
      icon: <MdOutlinePayment />,
      href: "/admin/payments",
    },
  ];

  if (loading) {
    return (
      <main className="h-screen flex-1">
        <DotsLoading />
      </main>
    );
  }

  return (
    <main className="container py-10 px-5">
      <section>
        <h2 className="text-lg text-typography font-black md:text-xl lg:text-2xl">
          آمار ها
        </h2>
        <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-3">
          {stats.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </div>
      </section>
      <Payments payments={data.payments} />
    </main>
  );
};

export default AdminDefaultPage;
