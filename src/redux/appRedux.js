import { createActions, createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { showMessage } from "react-native-flash-message";
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  showIndicator: null,
  hideIndicator: null,
  showError: ["errorMessage"],
  showSuccess: ["message"],
  startupRequest: ["actionSuccess", "actionFailure"],
  startupSuccess: null,
  startupFailure: null,
});

export const AppTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  error: "",
  isShowingIndicator: false,
  logedIn: undefined,
});

/* ------------- Reducers ------------- */
// handler show indicator
export const showIndicator = (state) => {
  return state.merge({ isShowingIndicator: true });
};

//handle hide indicator
export const hideIndicator = (state) => {
  return state.merge({ isShowingIndicator: false });
};

//handle show error
export const showError = (state, { errorMessage }) => {
  showMessage({
    message: "",
    description: errorMessage,
    type: "danger",
  });
  return state.merge({});
};

//handle show Success
export const showSuccess = (state, { message }) => {
  showMessage({
    message: "",
    description: message,
    type: "success",
  });
  return state.merge({});
};

export const startupRequest = (state) => {
  return state.merge({});
};

export const startupSuccess = (state) => {
  return state.merge({ logedIn: true });
};

export const startupFailure = (state) => {
  return state.merge({ logedIn: false });
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.STARTUP_REQUEST]: startupRequest,
  [Types.STARTUP_SUCCESS]: startupSuccess,
  [Types.STARTUP_FAILURE]: startupFailure,
  [Types.SHOW_INDICATOR]: showIndicator,
  [Types.SHOW_ERROR]: showError,
  [Types.SHOW_SUCCESS]: showSuccess,
});
