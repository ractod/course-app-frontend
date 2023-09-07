import http from "./httpService";

const getAllCourses = (searchParams) => http.get(`/courses/?${searchParams}`);
const likeCourse = (courseId) => http.patch(`/courses/like/${courseId}`);
const saveCourse = (courseId) => http.patch(`/courses/save/${courseId}`);
const getCourseById = (courseId) => http.get(`/courses/${courseId}`);

export { getAllCourses, getCourseById,likeCourse, saveCourse };
