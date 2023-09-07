
import Image from "next/image";
import Link from "next/link";

import { Button } from "@mui/material";

const MentorSection = () => {
  return (
    <section 
      className="flex items-center mt-10 max-lg:flex-col-reverse max-lg:gap-y-[30px]
      sm:mt-[100px] lg:mt-[140px] lg:gap-x-10 2xl:gap-x-[100px]"
    >
      <div>
        <h2 className="text-[30px] font-black leading-tight text-typography sm:text-[35px] 2xl:text-[45px]">
          مایلید اطلاعات خود را به اشتراک بگذارید. پس به عنوان یک مدرس ثبت نام
          کنید
        </h2>
        <p className="mt-5 font-medium text-mute text-sm sm:text-[15px] 2xl:text-base">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
        </p>
        <Button
          LinkComponent={Link}
          href="/mentor-details"
          variant="contained"
          className="mt-[51px]"
        >
          اطلاعات بیشتر
        </Button>
      </div>
      <div className="relative aspect-square shrink-0 w-full sm:w-[400px] xl:w-[460px] 2xl:w-[520px]">
        <Image src="/images/mentor.png" alt="mentor" fill />
      </div>
    </section>
  );
};

export default MentorSection;
