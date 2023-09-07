import http from "./httpService";

const getUser = () => http.get("/user");
const upgradeToMentor = (formData) => http.post("/user/upgrade-to-mentor", formData)
const updateUserProfile = (formData) => http.patch("/user", formData)
const updateAvatar = (formData, onUploadProgress) => http.patch("/user/avatar", formData, {onUploadProgress})

export { getUser, updateAvatar,updateUserProfile, upgradeToMentor };
