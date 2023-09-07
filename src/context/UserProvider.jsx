"use client"
import { createContext } from "react";

// hook
import useQuery from "@hooks/useQuery";

// service
import { getUser } from "@services/userServices";

export const UserContext = createContext()

const UserProvider = ({ children }) => {

  const [user, {loading, setData: setUser}] = useQuery(null, getUser)

  const updateUser = (callback) => {
    setUser((prevState) => {
      let draft = {...prevState}
      callback(draft) // update the user like user.email = ""
      return draft
    })
  }

  return (
    <UserContext.Provider value={{user, loading, updateUser}}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;