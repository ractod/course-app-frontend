import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex items-center gap-x-2">
      <Image src="/images/logo.png" alt="logo" priority width={30} height={30} />
      <Link
        href="/"
        className="font-extrabold text-typography md:text-lg lg:text-xl"
      >
        آموزیلاین
      </Link>
    </div>
  );
};

export default Logo;
