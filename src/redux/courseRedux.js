import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";
import { getStoredState } from "redux-persist";
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
});

export const CourseTypes = Types;
export default Creators;
/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  categories: [],
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
});
