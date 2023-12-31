import getToken from "@utils/getToken";

import axios from "axios";

const app = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

app.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(
      error.response?.data?.message || "مشکلی پیش آمده لطفا دوباره امتحان کنید!"
    );
  }
);

app.interceptors.request.use(async (request) => {
  const token = await getToken();
  request.headers.Authorization = `Bearer ${token}`;
  return request;
});

export default app;
