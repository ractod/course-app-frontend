"use client";

import Link from "next/link";

import When from "@components/elements/When";
import PaymentsTable from "@components/module/Tables/PaymentsTable";

import useUser from "@hooks/useUser";

import { FaLongArrowAltLeft } from "react-icons/fa";

const PaymentsSection = () => {
  const { user } = useUser();

  return (
    <section className="h-full max-h-[600px] mt-10">
      <div className="mb-7 flex items-center justify-between">
        <h2 className="text-lg text-mute font-black md:text-xl lg:text-2xl">
          تراکنش های اخیر
        </h2>
        <When truthy={user?.payments.length > 3}>
          <Link
            href="/dashboard/payments"
            className="flex items-center gap-x-2 text-mute transition-colors duration-150 hover:text-text-primary-500"
          >
            <span className="text-sm font-bold md:text-[15px] lg:text-base">
              بیشتر
            </span>
            <FaLongArrowAltLeft />
          </Link>
        </When>
      </div>
      <PaymentsTable payments={user?.payments} />
    </section>
  );
};

export default PaymentsSection;
