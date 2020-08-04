import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  registerRequest: ["params", "actionSuccess"],
  registerFailure: null,
  registerSuccess: null,

  loginRequest: ["params", "actionSuccess"],
  loginFailure: null,
  loginSuccess: ["userInfo", "token"],

  loginGoogleRequest: ["params", "actionSuccess"],
  loginGoogleFailure: null,
  loginGoogleSuccess: ["userInfo", "token"],

  forgotPasswordRequest: ["params", "actionSuccess"],
  forgotPasswordFailure: null,
  forgotPasswordSuccess: null,

  likeCourseRequest: ["params", "actionSuccess"],
  likeCourseFailure: null,
  likeCourseSuccess: null,

  getFavoriteRequest: ["actionSuccess"],
  getFavoriteFailure: null,
  getFavoriteSuccess: ["favorite"],

  getInfoUserRequest: ["actionSuccess"],
  getInfoUserSuccess: null,
  getInfoUserFailure: null,

  logout: ["actionSuccess"],
});

export const UserTypes = Types;
export default Creators;
/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  favorite: [],
  token: undefined,
  userInfo: undefined,
  error: undefined,
});

/* ------------- Reducers ------------- */

const registerRequest = (state) => {
  return state.merge({});
};

const registerSuccess = (state) => {
  return state.merge({});
};

const registerFailure = (state) => {
  return state.merge({});
};

const loginRequest = (state) => {
  return state.merge({});
};

const loginSuccess = (state, { userInfo, token }) => {
  return state.merge({ userInfo, token });
};

const loginFailure = (state, { error }) => {
  return state.merge({ error });
};

const loginGoogleRequest = (state) => {
  return state.merge({});
};

const loginGoogleSuccess = (state, { userInfo, token }) => {
  return state.merge({ userInfo, token });
};

const loginGoogleFailure = (state, { error }) => {
  return state.merge({ error });
};

const forgotPasswordRequest = (state) => {
  return state.merge({});
};

const forgotPasswordSuccess = (state) => {
  return state.merge({});
};

const forgotPasswordFailure = (state) => {
  return state.merge({});
};

const likeCourseRequest = (state) => {
  return state.merge({});
};

const likeCourseSuccess = (state) => {
  return state.merge({});
};

const likeCourseFailure = (state) => {
  return state.merge({});
};

const getFavoriteRequest = (state) => {
  return state.merge({});
};

const getFavoriteSuccess = (state, { favorite }) => {
  return state.merge({ favorite });
};

const getFavoriteFailure = (state) => {
  return state.merge({});
};

const getInfoUserRequest = (state) => {
  return state.merge({});
};

const getInfoUserSuccess = (state, { userInfo }) => {
  return state.merge({ userInfo });
};

const getInfoUserFailure = (state) => {
  return state.merge({});
};

const logout = (state) => {
  return INITIAL_STATE;
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.REGISTER_REQUEST]: registerRequest,
  [Types.REGISTER_SUCCESS]: registerSuccess,
  [Types.REGISTER_FAILURE]: registerFailure,

  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,

  [Types.LOGIN_GOOGLE_REQUEST]: loginGoogleRequest,
  [Types.LOGIN_GOOGLE_SUCCESS]: loginGoogleSuccess,
  [Types.LOGIN_GOOGLE_FAILURE]: loginGoogleFailure,

  [Types.FORGOT_PASSWORD_REQUEST]: forgotPasswordRequest,
  [Types.FORGOT_PASSWORD_SUCCESS]: forgotPasswordSuccess,
  [Types.FORGOT_PASSWORD_FAILURE]: forgotPasswordFailure,

  [Types.LIKE_COURSE_REQUEST]: likeCourseRequest,
  [Types.LIKE_COURSE_SUCCESS]: likeCourseSuccess,
  [Types.LIKE_COURSE_FAILURE]: likeCourseFailure,

  [Types.GET_FAVORITE_REQUEST]: getFavoriteRequest,
  [Types.GET_FAVORITE_SUCCESS]: getFavoriteSuccess,
  [Types.GET_FAVORITE_FAILURE]: getFavoriteFailure,

  [Types.GET_INFO_USER_REQUEST]: getInfoUserRequest,
  [Types.GET_INFO_USER_SUCCESS]: getInfoUserSuccess,
  [Types.GET_INFO_USER_FAILURE]: getInfoUserFailure,

  [Types.LOGOUT]: logout,
});
