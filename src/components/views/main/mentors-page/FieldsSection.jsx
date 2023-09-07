"use client";

import { Button } from "@mui/material";

import useFilter from "@hooks/useFilter";

import { FreeMode, Pagination } from "swiper/modules"
// swiper 
import { Swiper, SwiperSlide } from "swiper/react";

const FieldsSection = ({ fields }) => {
  const { filterValue, setParam, removeParam } = useFilter({
    initialValue: "all",
    paramName: "field"
  })

  return (
    <Swiper 
      className="w-full col-span-1 sm:col-span-2 cursor-grab"
      freeMode={true}
      spaceBetween={20}
      modules={[FreeMode, Pagination]}
      slidesPerView={"auto"}
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
      {fields.map((field) => (
        <SwiperSlide key={field._id} className="w-fit">
          <Button
            color="secondary"
            variant="contained"
            onClick={() => setParam(field.englishTitle)}
            className={ filterValue !== field.englishTitle ? "bg-white text-typography": ""}
          >
            {field.title}
          </Button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FieldsSection;
