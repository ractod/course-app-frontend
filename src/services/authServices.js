"use server"
import { cookies } from "next/headers";

import http from "./httpService";

const signup = (formData) => http.post("/user/auth/signup", formData).then((response) => {
  const cookiesStore = cookies()
  cookiesStore.set("token", response.token)
  return response
});
const signin = (formData) => http.post("/user/auth/signin", formData).then((response) => {
  const cookiesStore = cookies()
  cookiesStore.set("token", response.token)
  return response
});;
const signout = () => {
  const cookiesStore = cookies()
  cookiesStore.delete("token")
  return { message: "شما با موفقیت از حساب خود خارج شدید" }
}
const getUserRole = () => http.get("/user/role");

export { getUserRole, signin, signout,signup };
