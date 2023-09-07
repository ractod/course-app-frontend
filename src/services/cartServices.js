import http from "./httpService"

const addToCart = (courseId) => http.post("/cart/add", { courseId })
const removeFromCart = (courseId) => http.post("/cart/remove", { courseId })
const applyCoupon = (couponCode) => http.post("/cart/coupon/apply", { couponCode })
const removeCoupon = (couponId) => http.post("/cart/coupon/remove", { couponId })
const checkout = () => http.post("/payment")

export { addToCart, applyCoupon, checkout,removeCoupon, removeFromCart }