import Image from "next/image";
import Link from "next/link";

import { Button } from "@mui/material";

const JoinSection = () => {
  return (
    <section
      className="flex flex-col-reverse gap-y-[60px] mt-10 rounded-[20px] bg-[#EDE9F2] lg:flex-row
      lg:items-stretch lg:justify-between lg:gap-x-[30px] sm:mt-[100px] lg:mt-[170px]"
    >
      <div className="aspect-[16/14] w-[90%] flex items-end justify-end shrink-0 sm:w-[80%] lg:w-[480px] xl:w-[540px] 2xl:w-[680px]">
        <Image
          src="/images/join-image.png"
          alt="join image"
          width={680}
          height={600}
          className="w-full h-fit"
        />
      </div>
      <div className="px-[20px] pt-[30px] lg:pr-0 lg:pl-[50px] lg:py-[100px] xl:pt-[140px] xl:pb-[80px]">
        <p className="w-fit py-[10px] px-10 rounded-[10px] text-sm font-bold text-primary-600 bg-[#E4E2F4] md:text-[15px] xl:text-base">
          تمام سطوح
        </p>
        <h2 className="mt-5 text-[30px] font-black leading-tight text-typography sm:text-[35px] 2xl:text-[45px]">
          وقت خود را با نشستن در خانه از بین نبرید. مهارت های خود را به صورت
          آنلاین توسعه دهید
        </h2>
        <p className="mt-6 font-medium text-mute text-sm sm:text-[15px] 2xl:text-base">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
        </p>
        <Button
          LinkComponent={Link}
          href="/auth/signup"
          variant="contained"
          className="mt-[35px]"
        >
          همین حالا ثبت نام کنید
        </Button>
      </div>
    </section>
  );
};

export default JoinSection;
