import queryString from "querystring";
import { request } from "../config/axios";

export const login = (params) => {
  return request.post("/user/login", queryString.stringify(params));
};

export const register = (params) => {
  return request.post("/user/register", queryString.stringify(params));
};

export const likeCourse = (params) => {
  return request.post("/user/like-course", queryString.stringify(params));
};

export const getFavoriteCourses = () => {
  return request.get("/user/get-favorite-courses");
};
