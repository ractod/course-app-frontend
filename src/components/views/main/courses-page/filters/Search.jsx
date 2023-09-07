"use client";
import { useSearchParams } from "next/navigation";

import FormInput from "@components/elements/FormControls/FormInput";
import { Button } from "@mui/material";

import useFilter from "@hooks/useFilter";

import { BsSearch } from "react-icons/bs";

const Search = () => {
  const searchParams = useSearchParams();
  const { filterValue, setFilterValue, replaceAllParams, removeParam } =
    useFilter({
      initialValue: "",
      paramName: "search",
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!filterValue.trim() && searchParams.get("search")) {
      removeParam();
    } else if (filterValue.trim()) {
      replaceAllParams(filterValue);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="col-span-1">
      <FormInput
        value={filterValue}
        placeholder="جستجو دوره"
        classes={{ input: "pr-[60px]" }}
        onChange={(event) => setFilterValue(event.target.value)}
        startAdornment={
          <Button
            type="submit"
            variant="contained"
            className="w-[46px] h-[46px] min-w-fit p-0"
          >
            <BsSearch />
          </Button>
        }
      />
    </form>
  );
};

export default Search;
