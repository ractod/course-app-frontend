"use client";
// next
import Image from "next/image";

import FormInput from "@components/elements/FormControls/FormInput";
import { Button } from "@mui/material";

import useFilter from "@hooks/useFilter";

import { AiOutlineSearch } from "react-icons/ai";

const Banner = () => {
  const { filterValue, setFilterValue, setParam } = useFilter({
    initialValue: "",
    paramName: "search",
    newPathname: "/courses",
    scroll: true,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (filterValue.trim()) {
      setParam(filterValue);
    }
  };

  return (
    <section className="flex flex-col lg:flex-row items-center gap-[50px] py-[30px]">
      <div>
        <p className="w-fit py-[10px] px-10 rounded-[10px] bg-white font-bold text-secondary-500 text-sm md:text-[15px] lg:text-base">
          یادگیری را متوقف نکنید
        </p>
        <h1 className="mt-[30px] font-black text-typography text-[32px] sm:text-[45px] lg:text-[62px] leading-tight">
          مهارت های خود <br />
          با دوره های آنلاین <br />
          توسعه دهید
        </h1>
        <p className="mt-[30px] font-medium text-mute text-sm lg:text-[15px]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای.
        </p>
        <form onSubmit={handleSubmit} className="relative mt-10">
          <FormInput
            value={filterValue}
            placeholder="جستجو دوره"
            onChange={(event) => setFilterValue(event.target.value)}
            classes={{ endAdornment: "max-lg:relative max-lg:inset-0" }}
            endAdornment={
              <Button
                type="submit"
                variant="contained"
                endAdornment={<AiOutlineSearch />}
                className="h-[50px] max-lg:mt-3 max-lg:w-full"
              >
                جستجو
              </Button>
            }
          />
        </form>
      </div>
      <div className="relative aspect-square w-full sm:w-[300px] md:w-[400px] 2xl:w-[600px] shrink-0">
        <Image src="/images/landing-banner.png" alt="banner" fill priority />
      </div>
    </section>
  );
};

export default Banner;
