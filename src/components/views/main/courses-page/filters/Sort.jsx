"use client";

import { MenuItem, Select } from "@mui/material";

import useFilter from "@hooks/useFilter";


const sortOptions = [
  {
    title: "گران ترین",
    value: "expensivest",
  },
  {
    title: "ارزان ترین",
    value: "cheapest",
  },
  {
    title: "محبوب ترین",
    value: "popular",
  },
  {
    title: "جدید ترین",
    value: "newest",
  },
  {
    title: "قدیمی ترین",
    value: "oldest",
  },
  {
    title: "هیچ",
    value: "none",
  },
];

const Sort = () => {
  const { filterValue, setParam, removeParam } = useFilter({
    initialValue: "none",
    paramName: "sort"
  })

  const handleChange = (event) => {
    const value = event.target.value;
    if (value == "none") {
      removeParam()
    } else {
      setParam(value)
    }
  };

  return (
    <div className="col-span-1">
      <Select
        value={filterValue}
        onChange={handleChange}
        className="input input-filled border-0 outline-0"
        renderValue={(value) =>
          `مرتب سازی بر اساس: 
          ${sortOptions.find((option) => option.value == value).title}
          `
        }
      >
        {sortOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.title}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default Sort;
