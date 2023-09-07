import http from "./httpService"

const getAllFields = () => http.get("/fields")

export { getAllFields }