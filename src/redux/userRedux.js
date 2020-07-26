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

  logout: ["actionSuccess"],
});

export const UserTypes = Types;
export default Creators;
/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
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

  [Types.LOGOUT]: logout,
});
