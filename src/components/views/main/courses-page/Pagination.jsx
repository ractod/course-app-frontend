"use client";

import { Pagination as MuiPagination } from "@mui/material";

import useFilter from "@hooks/useFilter";

const Pagination = ({ pagesCount }) => {
  const { filterValue, setParam } = useFilter({
    initialValue: 1,
    paramName: "page",
    scroll: true
  })

  return (
    <div className="flex justify-center mt-20">
      <MuiPagination
        count={pagesCount}
        page={Number(filterValue)}
        color="primary"
        shape="rounded"
        onChange={(event, value) => setParam(value)}
      />
    </div>
  );
};

export default Pagination;
