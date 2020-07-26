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
    yield takeLatest(UserTypes.LOGOUT, logout),
  ]);
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
    yield put(AppActions.showSuccess("You are successfully logged in"));
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
