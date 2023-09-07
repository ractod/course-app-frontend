import Image from "next/image";
import Link from "next/link";

import { Button } from "@mui/material";

const NoBookmarks = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center">
      <Image
        src="/images/no-bookmarks.png"
        alt="error"
        width={250}
        height={250}
        quality={100}
        className="h-fit w-full max-w-[250px]"
      />
      <h1 className="mt-[30px] text-xl font-black text-typography md:text-2xl lg:text-3xl">
        دوره ای ذخیره نشده
      </h1>
      <p className="mt-2 text-sm font-medium text-mute md:text-[15px] lg:text-base">
        به نظر می رسد شما هیچ دوره ای را ذخیره نکردید
      </p>
      <Button
        variant="contained"
        LinkComponent={Link}
        href="/courses"
        className="mt-6"
      >
        دیدن دوره ها
      </Button>
    </div>
  );
};

export default NoBookmarks;
