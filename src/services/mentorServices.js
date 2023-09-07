import http from "./httpService";

const getAllMentors = (searchParams) =>
  http.get(`/mentor/list/?${searchParams}`);

const getMentorById = (mentorId) => http.get(`/mentor/${mentorId}`);

const rateToMentor = (mentorId, rate) =>
  http.put(`/mentor/rate/${mentorId}`, { rate });

const createCoupon = (formData) => http.post("/mentor/coupons", formData);

const updateCoupon = (formData, couponId) =>
  http.patch(`/mentor/coupons/${couponId}`, formData);

const deleteCoupon = (couponId) => http.delete(`/mentor/coupons/${couponId}`);

const updateMentorProfile = (formData) =>
  http.post("/mentor/profile", formData);
  
const updateSocialMedias = (formData) =>
  http.post("/mentor/social-medias", formData);

const deleteCourse = (courseId) => http.delete(`/mentor/courses/${courseId}`);

const createCourse = (formData, onUploadProgress, signal) =>
  http.post("/mentor/courses", formData, { onUploadProgress, signal });

const updateCourse = (courseId, formData, onUploadProgress, signal) => 
  http.patch(`/mentor/courses/${courseId}`, formData, { onUploadProgress, signal });

export {
  createCoupon,
  createCourse,
  deleteCoupon,
  deleteCourse,
  getAllMentors,
  getMentorById,
  rateToMentor,
  updateCoupon,
  updateCourse,
  updateMentorProfile,
  updateSocialMedias};
