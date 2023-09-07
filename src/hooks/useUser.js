import { useContext } from "react";

import { UserContext } from "@context/UserProvider";

const useUser = () => {
  const { user, loading, updateUser } = useContext(UserContext);

  return { user, loading, updateUser };
};

export default useUser;
