"use client";

import DotsLoading from "@components/elements/DotsLoading";
import PaymentsTable from "@components/module/Tables/PaymentsTable";

// hook
import useUser from "@hooks/useUser";

const UserPaymentsPage = () => {
  const { user, loading } = useUser();

  if (loading) {
    return (
      <main className="h-screen flex-1">
        <DotsLoading />
      </main>
    );
  }

  return (
    <main className="container px-5 py-10">
      <section className="h-full">
        <h2 className="mb-7 text-lg text-mute font-black md:text-xl lg:text-2xl">
          تراکنش های من
        </h2>
        <PaymentsTable payments={user?.payments} />
      </section>
    </main>
  );
};

export default UserPaymentsPage;
