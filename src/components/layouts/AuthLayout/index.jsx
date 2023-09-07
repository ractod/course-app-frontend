import Image from "next/image";

import Logo from "@components/elements/Logo";

export const metadata = {
  icons: {
    icon: "/images/logo.png"
  }
}

const AuthLayout = ({ children }) => {
  return (
    <main className="container flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center flex-1">
        {children}
      </div>
      <hr className="divider max-md:hidden w-[1px] h-[600px] bg-gradient-to-t mx-5"/>
      <div className="flex flex-col items-center justify-center flex-1 max-md:hidden">
        <Logo />
        <p className="mt-[15px] mb-10 font-black md:text-[30px] lg:text-[40px]">
          خوش آمدید به آموزیلاین،
          <br /> سامانه با تجربه آموزش آنلاین
        </p>
        <Image
          src="/images/auth-vector.png"
          alt="auth image"
          width={330}
          height={330}
        />
      </div>
    </main>
  );
};

export default AuthLayout;
