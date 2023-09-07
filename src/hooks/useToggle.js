import { useState } from "react";

const useToggle = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleToggle = () => {
    setValue((prevState) => !prevState);
  };

  return [value, handleToggle];
};

export default useToggle;
