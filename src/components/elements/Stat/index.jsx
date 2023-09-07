import Link from "next/link";

import { toPersianNumber } from "@utils/converters";

const Stat = ({ href, label, value, icon }) => {
  // should be link or not
  const Container = href ? Link : "div"

  return (
    <Container
      href={href}
      className="col-span-1 flex items-center justify-between p-4 pr-5 rounded-[15px]
      bg-white transition-all duration-150 hover:translate-y-[-10px]"
    >
      <div>
        <p className="mt-5 text-sm text-mute font-bold md:text[15px] lg:text-base">
          {label}
        </p>
        <span className="block text-base text-typography font-bold md:text-[17px] lg:text-lg">
          {toPersianNumber(value)}
        </span>
      </div>
      <span className="h-10 w-10 flex items-center justify-center rounded-full text-lg text-white bg-primary-500">
        {icon}
      </span>
    </Container>
  );
};

export default Stat;
