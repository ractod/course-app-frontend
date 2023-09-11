"use client";
import DotsLoading from "@components/elements/DotsLoading";
import Stat from "@components/elements/Stat";
import PaymentsSection from "./PaymentsSection";

import useUser from "@hooks/useUser";

import { BsBookmarkFill } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { MdOutlinePayment } from "react-icons/md";

const UserDefaultPage = () => {
  const { user, loading } = useUser();

  console.log(user)

  if (loading) {
    return (
      <main className="h-screen flex-1">
        <DotsLoading />
      </main>
    );
  }

  return (
    <main className="container px-5 py-10">
      <section>
        <h2 className="text-lg text-mute font-black md:text-xl lg:text-2xl">
          خلاصه حساب
        </h2>
        <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-3">
          <Stat
            href="/dashboard/courses"
            label="دوره ها"
            value={user?.purchasedCourses.length}
            icon={<CgNotes />}
          />
          <Stat
            href="/dashboard/payments"
            label="تراکنش ها"
            value={user?.payments.length}
            icon={<MdOutlinePayment />}
          />
          <Stat
            href="/dashboard/bookmarks"
            label="دوره های ذخیره شده"
            value={user?.savedCourses.length}
            icon={<BsBookmarkFill />}
          />
        </div>
      </section>
      <PaymentsSection />
    </main>
  );
};

export default UserDefaultPage;
