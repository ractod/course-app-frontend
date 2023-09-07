import Image from "next/image";
import Link from "next/link";

import PageBanner from "@components/elements/PageBanner";
import { Button } from "@mui/material";
import Tabs from "./Tabs";

const MentorDetailsPageTemplate = () => {
  return (
    <main className="container mt-5">
      <PageBanner
        title="به عنوان یک مدرس وارد شوید"
        image="/images/mentor-details-page-banner.png"
      />
      <section className="flex flex-col-reverse items-center gap-x-[60px] gap-y-5 lg:flex-row">
        <div>
          <h1 className="text-2xl font-black text-typography md:text-[26px] lg:text-[30px]">
            عضویت به عنوان مدرس
          </h1>
          <p className="mt-[15px] text-sm font-medium text-mute md:text-[15px] lg:text-base">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای.
          </p>
          <Tabs />
          <Button
            LinkComponent={Link}
            href="/auth/upgrade"
            variant="contained"
            className="mt-[30px]"
          >
            ارتقا به مدرس
          </Button>
        </div>
        <div className="shrink-0 w-full flex items-center justify-center p-[30px] pb-0 rounded-[15px] bg-[#FFDEDA] sm:w-fit">
          <Image
            src="/images/student.png"
            alt="student"
            width={440}
            height={580}
            className="h-fit w-full sm:w-[360px] 2xl:w-[440px]"
          />
        </div>
      </section>
    </main>
  );
};

export default MentorDetailsPageTemplate;
