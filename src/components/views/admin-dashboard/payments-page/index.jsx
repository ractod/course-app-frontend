"use client"
import DotsLoading from "@components/elements/DotsLoading";
import AdminPaymentsTable from "@components/module/Tables/AdminPaymentsTable";

import useQuery from "@hooks/useQuery";

import { getAllPayments } from "@services/adminServices";

const AdminPaymentsPage = () => {
  const [payments, {loading}] = useQuery([], getAllPayments)

  if(loading) {
    return (
      <main className="h-screen flex-1">
        <DotsLoading />
      </main>
    )
  }

  return (
    <main className="container py-10 px-5">
      <section>
        <h2 className="mb-7 text-lg text-mute font-black md:text-xl lg:text-2xl">
          تراکنش ها
        </h2>
        <AdminPaymentsTable payments={payments} />
      </section>
    </main>
  );
};

export default AdminPaymentsPage;
