import { all, takeLatest, put } from "redux-saga/effects";
import { AsyncStorage } from "react-native";
import AppActions, { AppTypes } from "../redux/appRedux";
import { setToken } from "../config/axios";

function* appRootSagas() {
  yield all([yield takeLatest(AppTypes.STARTUP_REQUEST, startupRequest)]);
}

function* startupRequest({ actionSuccess, actionFailure }) {
  try {
    let user = yield AsyncStorage.getItem("user") || undefined;
    user = JSON.parse(user);
    const token = user.token;
    yield setToken(token);
    yield put(AppActions.startupSuccess());
    if (actionSuccess) {
      actionSuccess();
    }
  } catch (error) {
    yield put(AppActions.startupFailure());
    if (actionFailure) {
      actionFailure();
    }
  }
}

export default appRootSagas;
