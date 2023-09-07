import http from "./httpService";

const signup = (formData) => http.post("/user/auth/signup", formData);
const signin = (formData) => http.post("/user/auth/signin", formData);
const signout = () => http.get("/user/auth/signout")
const getUserRole = () => http.get("/user/role");

export { getUserRole, signin, signout,signup };
