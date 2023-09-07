import Image from "next/image";

const PageBanner = ({ image, title }) => {
  return (
    <section 
      className="relative flex gap-x-[100px] mb-5 p-[30px] rounded-[20px] overflow-hidden bg-[#EFEBF5] 
      max-md:gap-y-5 max-md:flex-col md:h-[270px] md:items-center md:justify-center md:mb-10 md:p-5 "
    >
      <h1 className="max-w-[400px] text-[30px] font-black text-typography md:text-[35px] xl:text-[45px]">
        {title}
      </h1>
      <Image 
        src={image}
        alt="banner"
        width={430}
        height={230}
        priority={true}
        quality={100}
        className="w-full h-fit max-md:self-center sm:w-fit"
      />
    </section>
  );
}

export default PageBanner;