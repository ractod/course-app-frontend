"use client";
import React from "react";

import DotsLoading from "@components/elements/DotsLoading";
import { Button } from "@mui/material";
import CouponsTable from "./CouponsTable";
import CreateCouponModal from "./modals/CreateCouponModal";

import useToggle from "@hooks/useToggle";
import useUser from "@hooks/useUser";

import { BiSolidMessageSquareAdd } from "react-icons/bi";

const MentorCouponsPage = () => {
  const { loading } = useUser();
  const [isModalOpen, toggleModal] = useToggle(false);

  if (loading) {
    return (
      <main className="h-screen flex-1">
        <DotsLoading />
      </main>
    );
  }

  return (
    <main className="container py-10 px-5">
      <section className="h-full">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg text-mute font-black md:text-xl lg:text-2xl">
            کد تخفیف های من
          </h2>
          <Button
            variant="contained"
            endIcon={<BiSolidMessageSquareAdd />}
            onClick={toggleModal}
          >
            کد تخفیف جدید
          </Button>
        </div>
        <CouponsTable />
      </section>
      <CreateCouponModal open={isModalOpen} onClose={toggleModal} />
    </main>
  );
};

export default MentorCouponsPage;
