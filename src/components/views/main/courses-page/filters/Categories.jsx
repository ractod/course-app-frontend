"use client";

import { Button } from "@mui/material";

import useFilter from "@hooks/useFilter";

import { FreeMode, Pagination } from "swiper/modules"
// swiper 
import { Swiper, SwiperSlide } from "swiper/react";

const Categories = ({ categories }) => {
  const { filterValue, setParam, removeParam } = useFilter({
    initialValue: "all",
    paramName: "category"
  })

  return (
    <Swiper 
      freeMode={true}
      spaceBetween={20}
      slidesPerView={"auto"}
      modules={[FreeMode, Pagination]}
      className="w-full col-span-1 sm:col-span-2 cursor-grab"
    >
      <SwiperSlide className="w-fit">
        <Button
          color="secondary"
          variant="contained"
          onClick={removeParam}
          className={filterValue !== "all" ? "bg-white text-typography" : ""}
        >
          همه
        </Button>
      </SwiperSlide>
      {categories.map((category) => (
        <SwiperSlide key={category._id} className="w-fit">
          <Button
            color="secondary"
            variant="contained"
            onClick={() => setParam(category.englishTitle)}
            className={filterValue !== category.englishTitle ? "bg-white text-typography": ""}
          >
            {category.title}
          </Button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Categories;
