// compoonents
// next
import Image from "next/image";
import Link from "next/link";

import { Button } from "@mui/material";

import { AiFillPlayCircle } from "react-icons/ai";
import { HiSpeakerWave } from "react-icons/hi2";

const ClassesSection = () => {
  return (
    <section className="mt-10 sm:mt-[100px] lg:mt-[140px]">
      <div className="flex flex-col items-center text-center">
        <h2 className="font-black text-typography text-[30px] sm:text-[35px] lg:text-[45px]">
          ویدیو های با کیفیت در دوره ها
        </h2>
        <p className="mt-[20px] mb-10 font-medium text-mute text-sm sm:text-[15px] lg:text-base">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامع.
        </p>
        <Button component={Link} href="/courses" variant="contained">
          دیدین دوره ها
        </Button>
      </div>
      <div className="relative mt-[60px]">
        <div className="relative p-[10px] md:p-[30px] rounded-[20px] bg-white">
          <Image
            src="/images/class.png"
            alt="class"
            width={1000}
            height={500}
            className="w-full h-full rounded-[10px]"
          />
        </div>
        <div className="mt-10 flex max-sm:flex-col items-center max-sm:gap-y-3 sm:gap-x-[25px]">
          <div className="w-full sm:basis-1/2 flex items-center gap-x-3 p-[15px] rounded-[10px] bg-white">
            <div className="w-[24px] sm:w-[70px] h-[24px] sm:h-[70px] flex items-center justify-center rounded md:rounded-[10px] bg-secondary-100">
              <AiFillPlayCircle className="text-sm sm:text-3xl text-secondary-500" />
            </div>
            <p className="font-bold text-typography text-sm sm:text-[15px] lg:text-base">
              کلاس های ذخیره شده
            </p>
          </div>
          <div className="w-full sm:basis-1/2 flex items-center gap-x-3 p-[15px] rounded-[10px] bg-white">
            <div className="w-[24px] sm:w-[70px] h-[24px] sm:h-[70px] flex items-center justify-center rounded md:rounded-[10px] bg-green-100">
              <HiSpeakerWave className="text-sm sm:text-3xl text-green-500" />
            </div>
            <p className="font-bold text-typography text-sm sm:text-[15px] lg:text-base">
              مدرس های با تجربه
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ClassesSection;
