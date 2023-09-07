"use client";

import Image from "next/image";

import { Button } from "@mui/material";

const error = ({ reset }) => {
  return (
    <main className="relative h-screen flex items-center justify-center">
      <section className="flex flex-col items-center text-center">
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
          به دلیل بروز مشکل این صفحه از دسترس خارج شده. لطفا دوباره امتحان کنید
        </p>
        <Button variant="contained" className="mt-6" onClick={reset}>
          امتحان دوباره
        </Button>
      </section>
      <span 
        className="absolute bottom-0 left-0 aspect-square w-[40vw] rounded-full bg-gradient-to-t
        from-primary-200 via-primary-400 to-primary-700 blur-[90px] sm:w-[30vw] md:w-[25vw] md:blur-[200px]"
      ></span>
      <span 
        className="absolute top-0 right-0 aspect-square w-[40vw] rounded-full bg-gradient-to-t
        from-primary-200 via-primary-400 to-primary-700 blur-[90px] sm:w-[30vw] md:w-[25vw] md:blur-[200px]"
      ></span>
    </main>
  );
};

export default error;
