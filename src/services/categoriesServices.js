import http from "./httpService";

const getAllCategories = () => http.get("/categories");

export { getAllCategories };
