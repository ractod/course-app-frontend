"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = ({ dashboardLinks }) => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-y-2">
      {dashboardLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`
            group flex items-center gap-x-3 py-3 px-4 rounded-[15px] transition-colors duration-300
            ${pathname == link.href ? "active bg-white" : ""}
          `}
        >
          <span
            className="h-[30px] w-[30px] flex items-center justify-center rounded-xl transition-colors 
            duration-300 text-primary-500 bg-white group-[.active]:text-white group-[.active]:bg-primary-500"
          >
            {link.icon}
          </span>
          <span
            className="text-mute font-bold transition-colors duration-300 
            group-hover:text-primary-500 group-[.active]:text-typography"
          >
            {link.label}
          </span>
        </Link>
      ))}
    </ul>
  );
};

export default Links;
