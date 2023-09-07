import Image from "next/image";

import { Button } from "@mui/material";

const Error = () => {
  return (
    <div className="flex flex-col items-center text-center mt-20">
      <Image
        src="/images/error.png"
        alt="error"
        width={300}
        height={240}
        quality={100}
        priority
        className="h-fit w-full max-w-[240px]"
      />
      <h1 className="mt-[30px] text-xl font-black text-typography md:text-2xl lg:text-3xl">
        مشکلی پیش آمده!
      </h1>
      <p className="mt-2 text-sm font-medium text-mute md:text-[15px] lg:text-base">
        این بخش از برنامه به دلیل وجود مشکل از دسترس خارج شده. دوباره امتحان کنید
      </p>
      <Button
        variant="contained"
        className="mt-6"
        onClick={() => window.location.reload()}
      >
        امتحان دوباره
      </Button>
    </div>
  );
};

export default Error;
