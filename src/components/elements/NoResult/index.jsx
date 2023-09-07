"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "@mui/material";

import When from "../When";

const NoResult = ({ hasResetButton = false }) => {
  const pathname = usePathname();
  const router = useRouter();

  // removing searchParams
  const handleResetFilters = () => {
    router.push(pathname);
  };

  return (
    <div className="flex flex-col items-center  mt-[100px]">
      <Image
        src="/images/no-result.png"
        alt="no result"
        width={245}
        height={230}
        quality={100}
        className="w-full max-w-[245px] h-fit"
      />
      <h2 className="mt-[30px] text-base font-extrabold text-center text-primary-500 md:text-lg lg:text-xl">
        موردی یافت نشد!
      </h2>
      <p className="mt-2 text-sm font-medium text-center text-mute md:text-[15px] lg:text-base">
        حدس میزنیم محصولی مطلابق با فیلتر های شما وجود ندارد
      </p>
      <When truthy={!!hasResetButton}>
        <Button
          variant="contained"
          className="mt-6"
          onClick={handleResetFilters}
        >
          حذف فیلتر ها
        </Button>
      </When>
    </div>
  );
};

export default NoResult;
