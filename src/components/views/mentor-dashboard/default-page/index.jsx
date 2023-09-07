"use client"
import DotsLoading from "@components/elements/DotsLoading";
import Stat from "@components/elements/Stat";
import Students from "./Students";

import useUser from "@hooks/useUser";

import { AiFillStar } from "react-icons/ai";
import { BiSolidCoupon } from "react-icons/bi";
import { FaMoneyBillWave } from "react-icons/fa";
import { IoIosFolderOpen } from "react-icons/io";
import { PiStudentFill } from "react-icons/pi";

const MentorDefaultPage = () => {
  const {user, loading} = useUser()

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
        <h2 className="text-lg text-mute font-black md:text-xl lg:text-2xl">
          خلاصه حساب
        </h2>
        <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-3">
          <Stat
            label="امتیاز"
            value={user?.mentorData.rate.avrage}
            icon={<AiFillStar />}
          />
          <Stat
            href="/mentor/courses"
            label="دوره ها"
            value={user?.mentorData.courses.length}
            icon={<IoIosFolderOpen />}
          />
          <Stat
            href="/mentor/students"
            label="دانشجویان"
            value={user?.mentorData.stats.students.length}
            icon={<PiStudentFill />}
          />
          <Stat
            label="تعداد فروش"
            value={user?.mentorData.stats.totalSaleQuanity}
            icon={<FaMoneyBillWave />}
          />
          <Stat
            label="کد تخفیف"
            value={user?.mentorData.coupons.length}
            icon={<BiSolidCoupon />}
          />
        </div>
      </section>
      <Students />
    </main>
  );
}

export default MentorDefaultPage;