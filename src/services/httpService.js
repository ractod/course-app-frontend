import getToken from "@utils/getToken";

import axios from "axios";

const app = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

app.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(
      error.response?.data?.message || "مشکلی پیش آمده لطفا دوباره امتحان کنید!"
    );
  }
);

app.interceptors.request.use((request) => {
  const token = getToken();
  request.headers.Cookie = `token=${token}`;
  return request;
});

export default app;
