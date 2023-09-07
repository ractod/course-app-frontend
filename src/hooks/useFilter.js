import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const useFilter = ({
  initialValue,
  paramName,
  newPathname,
  scroll = false,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [filterValue, setFilterValue] = useState(
    searchParams.get(paramName) || initialValue
  );

  const setParam = (value) => {
    setFilterValue(value);
    const params = new URLSearchParams(searchParams);
    params.set(paramName, value);
    router.push(`${newPathname || pathname}/?${params.toString()}`, { scroll });
  };

  const replaceAllParams = (value) => {
    setFilterValue(value);
    const params = new URLSearchParams();
    params.set(paramName, value);
    router.push(`${newPathname || pathname}/?${params.toString()}`, { scroll });
  };

  const removeParam = () => {
    setFilterValue(initialValue);
    const params = new URLSearchParams(searchParams);
    params.delete(paramName);
    router.push(`${newPathname || pathname}/?${params.toString()}`, { scroll });
  };

  useEffect(() => {
    setFilterValue(searchParams.get(paramName) || initialValue);
  }, [searchParams]);

  return {
    filterValue,
    setFilterValue,
    setParam,
    removeParam,
    replaceAllParams,
  };
};

export default useFilter;
