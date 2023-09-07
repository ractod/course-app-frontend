import http from "./httpService";

const getOverview = () => http.get("/admin/overview");
const getAllPayments = () => http.get("/admin/payments");
const getAllUsers = () => http.get("/admin/users");
const deleteUserById = (userId) => http.delete(`/admin/users/${userId}`);
const getAdminAllCategories = () => http.get("/admin/categories");
const createCategory = (formData) => http.post("/admin/categories", formData);
const updateCategory = (categoryId, formData) =>
  http.patch(`/admin/categories/${categoryId}`, formData);
const deleteCategory = (categoryId) =>
  http.delete(`/admin/categories/${categoryId}`);
const getAdminAllFields = () => http.get("/admin/fields");
const createField = (formData) => http.post("/admin/fields", formData);
const updateField = (fieldId, formData) =>
  http.patch(`/admin/fields/${fieldId}`, formData);
const deleteField = (fieldId) => http.delete(`/admin/fields/${fieldId}`);
const getAdminAllCourses = () => http.get("/admin/courses");
const verifyCourse = (courseId) =>
  http.patch(`/admin/courses/verify/${courseId}`);
const rejectCourse = (courseId, statusMessage) =>
  http.patch(`/admin/courses/reject/${courseId}`, { statusMessage });

export {
  createCategory,
  createField,
  deleteCategory,
  deleteField,
  deleteUserById,
  getAdminAllCategories,
  getAdminAllCourses,
  getAdminAllFields,
  getAllPayments,
  getAllUsers,
  getOverview,
  rejectCourse,
  updateCategory,
  updateField,
  verifyCourse,
};
