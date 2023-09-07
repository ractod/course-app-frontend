import Image from "next/image";
import Link from "next/link";

import { Button } from "@mui/material";

const EmptyCart = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <Image
        src="/images/empty-cart.png"
        alt="empty cart"
        width={270}
        height={260}
        priority
      />
      <h1 className="mt-5 text-lg font-black text-typography md:text-xl lg:text-2xl">
        سبد خرید شما خالی می باشد
      </h1>
      <p className="mt-2 text-sm font-medium text-mute md:text-[15px] lg:text-base">
        به نظر می رسد شما هیچ محصولی را به سبد خرید خود اضافه نکردید
      </p>
      <Button
        LinkComponent={Link}
        href="/courses"
        variant="contained"
        className="mt-6"
      >
        دیدن دوره ها
      </Button>
    </div>
  );
};

export default EmptyCart;
