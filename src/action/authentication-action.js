import axios from "axios";
import apiLogin from "../core/service/authenticate-service";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESSED = "LOGIN_SUCCESSED";
export const LOGIN_FAILED = "LOGIN_FAILED";

const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESSED,
    data,
  };
};

const loginFailed = () => {
  return { type: LOGIN_FAILED };
};

export const login = (dispatch) => (username, password) => {
  dispatch({ type: LOGIN_REQUEST });
  apiLogin(username, password)
    .then((response) => {
      if (response.status === 200) {
        dispatch(loginSuccess(response.data));
      } else {
        dispatch(loginFailed());
      }
    })
    .catch((error) => {
      dispatch(loginFailed());
    });
};
