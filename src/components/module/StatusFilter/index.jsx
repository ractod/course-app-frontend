import { Button } from "@mui/material";

import { FreeMode, Pagination } from "swiper/modules";
import { Swiper,SwiperSlide } from "swiper/react";

const StatusFilter = ({ selectedStatus, onSelect, options }) => {
  return (
    <Swiper 
      freeMode={true}
      spaceBetween={20}
      slidesPerView={"auto"}
      modules={[FreeMode, Pagination]}
      className="w-full col-span-1 sm:col-span-2 cursor-grab"
    >
      {options.map((option) => (
        <SwiperSlide key={option.value} className="w-fit">
          <Button
            color="secondary"
            variant="contained"
            onClick={onSelect(option)}
            className={selectedStatus.value !== option.value ? "bg-white text-typography": ""}
          >
            {option.label}
          </Button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default StatusFilter;