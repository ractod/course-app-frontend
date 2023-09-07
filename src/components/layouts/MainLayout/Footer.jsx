
import Link from "next/link";

import Logo from "@components/elements/Logo";

import { footerLinks, footerMedias } from "@constants/footerLinks";

const Footer = () => {
  return (
    <footer className="container grid grid-cols-1 gap-10 mt-[200px] pb-[50px] sm:grid-cols-3 md:grid-cols-4">
      <div className="grid-cols-1 sm:grid-cols-3 md:grid-col-1">
        <Logo />
        <div className="flex items-center gap-x-1 mt-6">
          {footerMedias.map((media) => (
            <Link
              key={media.id}
              href={media.href}
              className="w-10 h-10 flex justify-center items-center rounded-full transition-colors 
              duration-200 text-2xl text-typography hover:text-white hover:bg-secondary-500"
            >
              <media.Icon />
            </Link>
          ))}
        </div>
        <p className="mt-10 text-sm font-medium text-mute sm:text-[15px] lg:text-base">
          &copy; amozino.com
          <br />
          تمام حقوق آموزیلاین محفوض است
        </p>
      </div>
      {footerLinks.map((item) => (
        <div key={item.title} className="cols-span-1">
          <h4 className="text-base font-extrabold text-typography sm:text-lg lg:text-xl">
            {item.title}
          </h4>
          <ul className="flex flex-col gap-y-5 mt-5">
            {item.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="w-fit text-sm font-medium text-mute transition-colors 
                duration-150 hover:text-primary-500 sm:text-[15px] lg:text-base"
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
