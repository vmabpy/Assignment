import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";
/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  getCategoriesRequest: ["actionSuccess"],
  getCategoriesFailure: null,
  getCategoriesSuccess: ["categories"],

  getCoursesRequest: ["params", "actionSuccess"],
  getCoursesFailure: null,
  getCoursesSuccess: null,

  getCourseDetailRequest: ["params", "actionSuccess"],
  getCourseDetailFailure: null,
  getCourseDetailSuccess: null,

  getNewRequest: ["params", "actionSuccess"],
  getNewSuccess: null,
  getNewFailure: null,

  getRateRequest: ["params", "actionSuccess"],
  getRateSuccess: null,
  getRateFailure: null,

  getRecommendRequest: ["params", "actionSuccess"],
  getRecommendSuccess: null,
  getRecommendFailure: null,

  getListTutorRequest: ["actionSuccess"],
  getListTutorSuccess: null,
  getListTutorFailure: null,

  getTutorDetailRequest: ["params", "actionSuccess"],
  getTutorDetailSuccess: null,
  getTutorDetailFailure: null,

  searchCoursesRequest: ["params", "actionSuccess"],
  searchCoursesSuccess: ["searchResults", "inputSearch"],
  searchCoursesFailure: null,

  paymentCourseRequest: ["params", "actionSuccess"],
  paymentCourseSuccess: null,
  paymentCourseFailure: null,

  listExercisesLessonRequest: ["params", "actionSuccess"],
  listExercisesLessonSuccess: null,
  listExercisesLessonFailure: null,

  exercisesTestRequest: ["params", "actionSuccess"],
  exercisesTestSuccess: null,
  exercisesTestFailure: null,

  commentCourseRequest: ["params", "actionSuccess"],
  commentCourseSuccess: null,
  commentCourseFailure: null,
});

export const CourseTypes = Types;
export default Creators;
/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  categories: [],
  inputSearch: undefined,
  searchResults: undefined,
  historiesSearch: [],
});

/* ------------- Reducers ------------- */

const getCategoriesRequest = (state) => {
  return state.merge({});
};

const getCategoriesFailure = (state) => {
  return state.merge({});
};

const getCategoriesSuccess = (state, { categories }) => {
  return state.merge({ categories });
};

const getCoursesRequest = (state) => {
  return state.merge({});
};

const getCoursesSuccess = (state) => {
  return state.merge({});
};

const getCoursesFailure = (state) => {
  return state.merge({});
};

const getCourseDetailRequest = (state) => {
  return state.merge({});
};

const getCourseDetailSuccess = (state) => {
  return state.merge({});
};

const getCourseDetailFailure = (state) => {
  return state.merge({});
};

const getNewRequest = (state) => {
  return state.merge({});
};

const getNewSuccess = (state) => {
  return state.merge({});
};

const getNewFailure = (state) => {
  return state.merge({});
};

const getRateRequest = (state) => {
  return state.merge({});
};

const getRateSuccess = (state) => {
  return state.merge({});
};

const getRateFailure = (state) => {
  return state.merge({});
};

const getRecommendRequest = (state) => {
  return state.merge({});
};

const getRecommendSuccess = (state) => {
  return state.merge({});
};

const getRecommendFailure = (state) => {
  return state.merge({});
};

const getListTutorRequest = (state) => {
  return state.merge({});
};

const getListTutorSuccess = (state) => {
  return state.merge({});
};

const getListTutorFailure = (state) => {
  return state.merge({});
};

const getTutorDetailRequest = (state) => {
  return state.merge({});
};

const getTutorDetailSuccess = (state) => {
  return state.merge({});
};

const getTutorDetailFailure = (state) => {
  return state.merge({});
};

const searchCoursesRequest = (state) => {
  return state.merge({});
};

const searchCoursesSuccess = (state, { searchResults, inputSearch }) => {
  return state.merge({ searchResults, inputSearch });
};

const searchCoursesFailure = (state) => {
  return state.merge({});
};

const paymentCourseRequest = (state) => {
  return state.merge({});
};

const paymentCourseSuccess = (state) => {
  return state.merge({});
};

const paymentCourseFailure = (state) => {
  return state.merge({});
};

const listExercisesLessonRequest = (state) => {
  return state.merge({});
};

const listExercisesLessonSuccess = (state) => {
  return state.merge({});
};

const listExercisesLessonFailure = (state) => {
  return state.merge({});
};

const exercisesTestRequest = (state) => {
  return state.merge({});
};

const exercisesTestSuccess = (state) => {
  return state.merge({});
};

const exercisesTestFailure = (state) => {
  return state.merge({});
};

const commentCourseRequest = (state) => {
  return state.merge({});
};

const commentCourseSuccess = (state) => {
  return state.merge({});
};

const commentCourseFailure = (state) => {
  return state.merge({});
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_CATEGORIES_REQUEST]: getCategoriesRequest,
  [Types.GET_CATEGORIES_SUCCESS]: getCategoriesSuccess,
  [Types.GET_CATEGORIES_FAILURE]: getCategoriesFailure,

  [Types.GET_COURSES_REQUEST]: getCoursesRequest,
  [Types.GET_COURSES_SUCCESS]: getCoursesSuccess,
  [Types.GET_COURSES_FAILURE]: getCoursesFailure,

  [Types.GET_COURSE_DETAIL_REQUEST]: getCourseDetailRequest,
  [Types.GET_COURSE_DETAIL_SUCCESS]: getCourseDetailSuccess,
  [Types.GET_COURSE_DETAIL_FAILURE]: getCourseDetailFailure,

  [Types.GET_NEW_REQUEST]: getNewRequest,
  [Types.GET_NEW_SUCCESS]: getNewSuccess,
  [Types.GET_NEW_FAILURE]: getNewFailure,

  [Types.GET_RATE_REQUEST]: getRateRequest,
  [Types.GET_RATE_SUCCESS]: getRateSuccess,
  [Types.GET_RATE_FAILURE]: getRateFailure,

  [Types.GET_RECOMMEND_REQUEST]: getRecommendRequest,
  [Types.GET_RECOMMEND_SUCCESS]: getRecommendSuccess,
  [Types.GET_RECOMMEND_FAILURE]: getRecommendFailure,

  [Types.GET_LIST_TUTOR_REQUEST]: getListTutorRequest,
  [Types.GET_LIST_TUTOR_SUCCESS]: getListTutorSuccess,
  [Types.GET_LIST_TUTOR_FAILURE]: getListTutorFailure,

  [Types.GET_TUTOR_DETAIL_REQUEST]: getTutorDetailRequest,
  [Types.GET_TUTOR_DETAIL_SUCCESS]: getTutorDetailSuccess,
  [Types.GET_TUTOR_DETAIL_FAILURE]: getTutorDetailFailure,

  [Types.SEARCH_COURSES_REQUEST]: searchCoursesRequest,
  [Types.SEARCH_COURSES_SUCCESS]: searchCoursesSuccess,
  [Types.SEARCH_COURSES_FAILURE]: searchCoursesFailure,

  [Types.PAYMENT_COURSE_REQUEST]: paymentCourseRequest,
  [Types.PAYMENT_COURSE_SUCCESS]: paymentCourseSuccess,
  [Types.PAYMENT_COURSE_FAILURE]: paymentCourseFailure,

  [Types.LIST_EXERCISES_LESSON_REQUEST]: listExercisesLessonRequest,
  [Types.LIST_EXERCISES_LESSON_SUCCESS]: listExercisesLessonSuccess,
  [Types.LIST_EXERCISES_LESSON_FAILURE]: listExercisesLessonFailure,

  [Types.EXERCISES_TEST_REQUEST]: exercisesTestRequest,
  [Types.EXERCISES_TEST_SUCCESS]: exercisesTestSuccess,
  [Types.EXERCISES_TEST_FAILURE]: exercisesTestFailure,

  [Types.COMMENT_COURSE_REQUEST]: commentCourseRequest,
  [Types.COMMENT_COURSE_SUCCESS]: commentCourseSuccess,
  [Types.COMMENT_COURSE_FAILURE]: commentCourseFailure,
});
