import Link from "next/link";

import When from "@components/elements/When";
import AdminPaymentsTable from "@components/module/Tables/AdminPaymentsTable";

import { FaLongArrowAltLeft } from "react-icons/fa";

const Payments = ({ payments }) => {
  return (
    <section className="mt-10">
      <div className="mb-7 flex items-center justify-between">
        <h2 className="text-lg text-mute font-black md:text-xl lg:text-2xl">
          تراکنش های اخیر
        </h2>
        <Link
          href="/admin/payments"
          className="flex items-center gap-x-2 text-mute transition-colors duration-150 hover:text-text-primary-500"
        >
          <span className="text-sm font-bold md:text-[15px] lg:text-base">
            بیشتر
          </span>
          <FaLongArrowAltLeft />
        </Link>
      </div>
      <AdminPaymentsTable payments={payments} />
    </section>
  );
}

export default Payments;