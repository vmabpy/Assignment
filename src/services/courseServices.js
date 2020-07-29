import queryString from "querystring";
import { request } from "../config/axios";

export const getCategories = () => {
  return request.get("/category/all");
};

export const getCourses = (params) => {
  return request.post("/course/search", params);
};

export const getDetailCourse = (params) => {
  const { id } = params;
  return request.get(`/course/get-course-detail/${id}/undefined`);
};

export const getNewCourses = (params) => {
  return request.post("/course/top-new", params);
};

export const getRateCourses = (params) => {
  return request.post("/course/top-rate", params);
};

export const getListTutor = () => {
  return request.get("/instructor");
};

export const getTutorDetail = (params) => {
  const { idTutor } = params;
  return request.get(`/instructor/detail/${idTutor}`);
};
