"use server"
import { cookies } from "next/headers"

const getToken = async () => {
  const cookiesStore = cookies()
  const token = await cookiesStore.get("token")?.value
  console.log({token})
  return token
}

export default getToken