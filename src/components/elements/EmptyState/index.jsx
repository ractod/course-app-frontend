import Image from "next/image";
import Link from "next/link";

import { Button } from "@mui/material";

import When from "../When";

const EmptyState = ({ title, subTitle, linkLabel, linkHref }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center">
      <Image
        src="/images/empty-folder.png"
        alt="empty folder"
        width={250}
        height={220}
        quality={100}
        priority
        className="h-fit w-full max-w-[250px]"
      />
      <h1 className="mt-[30px] text-xl font-black text-typography md:text-2xl lg:text-3xl">
        {title}
      </h1>
      <p className="mt-2 text-sm font-medium text-mute md:text-[15px] lg:text-base">
        {subTitle}
      </p>
      <When truthy={!!linkLabel}>
        <Button
          variant="contained"
          className="mt-6"
          LinkComponent={Link}
          href={linkHref}
        >
          {linkLabel}
        </Button>
      </When>
    </div>
  );
};

export default EmptyState;
