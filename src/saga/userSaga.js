import { takeLatest, all, call, put } from "redux-saga/effects";
import { AsyncStorage } from "react-native";
import _ from "lodash";
import * as api from "../services/userServices";
import UserActions, { UserTypes } from "../redux/userRedux";
import { setToken } from "../config/axios";
import AppActions from "../redux/appRedux";

function* userRootSagas() {
  yield all([
    yield takeLatest(UserTypes.LOGIN_REQUEST, login),
    yield takeLatest(UserTypes.REGISTER_REQUEST, register),
    yield takeLatest(UserTypes.LOGOUT, logout),
  ]);
}

function* register({ params, actionSuccess }) {
  yield put(AppActions.showIndicator());
  try {
    const response = yield call(api.register, params);
    yield put(UserActions.registerSuccess(response));
    if (actionSuccess) {
      actionSuccess(response);
    }
    yield put(AppActions.hideIndicator());
    yield put(AppActions.showSuccess("Đăng kí thành công"));
  } catch (error) {
    yield put(UserActions.registerFailure(error));
    yield put(AppActions.hideIndicator());
    yield put(AppActions.showError(error.message));
  }
}

function* login({ params, actionSuccess }) {
  yield put(AppActions.showIndicator());
  try {
    const { userInfo, token } = yield call(api.login, params);
    yield put(UserActions.loginSuccess(userInfo, token));
    yield AsyncStorage.setItem("user", JSON.stringify({ token }));
    if (actionSuccess) {
      actionSuccess({ token });
    }
    setToken(token);
    yield put(AppActions.hideIndicator());
    yield put(AppActions.showSuccess("Đăng nhập thành công"));
    yield put(AppActions.startupSuccess());
  } catch (error) {
    yield put(UserActions.loginFailure(error));
    yield put(AppActions.hideIndicator());
    yield put(AppActions.showError(error.message));
  }
}

function* logout({ actionSuccess }) {
  try {
    yield AsyncStorage.removeItem("user");
    yield put(AppActions.startupFailure());
    if (actionSuccess) {
      actionSuccess();
    }
  } catch (error) {
    console.log(error);
  }
}

export default userRootSagas;
