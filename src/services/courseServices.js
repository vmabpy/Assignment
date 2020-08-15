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

export const getRecommendCourses = (params) => {
  const { id, limit, offset } = params;
  return request.get(`/user/recommend-course/${id}/${limit}/${offset}`);
};

export const getListTutor = () => {
  return request.get("/instructor");
};

export const getTutorDetail = (params) => {
  const { idTutor } = params;
  return request.get(`/instructor/detail/${idTutor}`);
};

export const searchCourses = (params) => {
  return request.post("/course/searchV2", params);
};

export const paymentCourse = (params) => {
  return request.post(
    "/payment/get-free-courses",
    queryString.stringify(params)
  );
};

export const listExercisesLesson = (params) => {
  return request.post(
    "/exercise/student/list-exercise-lesson",
    queryString.stringify(params)
  );
};

export const exercisesTest = (params) => {
  return request.post(
    "/exercise/student/exercise-test",
    queryString.stringify(params)
  );
};

export const commentCourse = (params) => {
  return request.post("/course/rating-course", params);
};

export const getRecentSearch = () => {
  return request.get("/course/search-history");
};

export const deleteSearchHistory = (params) => {
  const { id } = params;
  return request.delete(`/course/delete-search-history/${id}`);
};

export const updateCurrentVideo = (params) => {
  return request.put(
    "/lesson/update-current-time-learn-video",
    queryString.stringify(params)
  );
};

export const getCurrentVideo = (params) => {
  const { courseId, lessonId } = params;
  return request.get(`​/lesson​/video​/${courseId}​/${lessonId}`);
};
