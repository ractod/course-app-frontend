"use client";

import Link from "next/link";

import Logo from "@components/elements/Logo";
import HeaderUserNavigations from "./HeaderUserNavigations";
import MobileMenu from "./MobileMenu";

import useToggle from "@hooks/useToggle";
import useUser from "@hooks/useUser";

import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const {loading} = useUser()
  const [isMenuOpen, toggleMenu] = useToggle(false);

  return (
    <header
      className={`container sticky top-0 flex items-center justify-between 
      mt-[25px] py-3 z-50 bg-body  ${
        loading ? "blur-sm pointer-events-none" : ""
      }`}
    >
      <div className="flex items-center gap-x-[30px] md:gap-x-[45px]">
        <button
          onClick={toggleMenu}
          className="xl:hidden flex items-center gap-x-[10px]"
        >
          <AiOutlineMenu className="text-3xl text-typography" />
          <span href="/" className="font-bold text-typography">
            منو
          </span>
        </button>
        <HeaderUserNavigations />
      </div>
      <nav>
        <ul className="max-xl:hidden flex items-center gap-x-[45px]">
          <Link
            href="/"
            className="font-bold transition-colors text-typography hover:text-primary-600"
          >
            خانه
          </Link>
          <Link
            href="/courses"
            className="font-bold transition-colors text-typography hover:text-primary-600"
          >
            دوره ها
          </Link>
          <Link
            href="/mentors"
            className="font-bold transition-colors text-typography hover:text-primary-600"
          >
            مدرس ها
          </Link>
        </ul>
      </nav>
      <Logo />
      <MobileMenu isOpen={isMenuOpen} toggleIsOpen={toggleMenu} />
    </header>
  );
};

export default Header;
