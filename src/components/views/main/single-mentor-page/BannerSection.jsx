import Image from "next/image";

const BannerSection = ({ mentor: { avatar, mentorData, fullname } }) => {
  return (
    <section className="relative">
      <div className="relative h-[120px] rounded-[20px] overflow-hidden sm:h-[170px]">
        <Image
          src="/images/mentor-page-pattern.png"
          alt="pattern"
          fill
          priority
          quality={100}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col items-center gap-y-[15px] -mt-20 xl:hidden">
        <Image
          src={avatar || "/images/user-placeholder.png"}
          alt="mentor avatar"
          width={170}
          height={170}
          className="aspect-square h-fit w-[130px] rounded-[10px] object-cover sm:w-[140px] md:w-[170px]"
        />
        <div>
          <p className="text-[22px] font-black text-typography md:text-[25px] lg:text-[30px]">
            {fullname}
          </p>
          <p className="text-base font-medium text-mute md:text-lg lg:text-xl">
            {mentorData.fields.map((field) => field.title).join("، ")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
