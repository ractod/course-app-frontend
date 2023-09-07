"use server"
import { cookies } from "next/headers"

const getToken = () => {
  const cookiesStore = cookies()
  const token = cookiesStore.get("token")?.value
  return token
}

export default getToken