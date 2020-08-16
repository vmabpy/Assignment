import { all, takeLatest, put, take } from "redux-saga/effects";
import { AsyncStorage } from "react-native";
import AppActions, { AppTypes } from "../redux/appRedux";
import UserActions from "../redux/userRedux";
import { setToken } from "../config/axios";
import I18n from "ex-react-native-i18n";
import { Restart } from "fiction-expo-restart";
import { Updates } from "expo";

function* appRootSagas() {
  yield all([
    yield takeLatest(AppTypes.STARTUP_REQUEST, startupRequest),
    yield takeLatest(AppTypes.CHANGE_LANGUAGE, changeLanguageLocal),
  ]);
}

function* startupRequest({ actionSuccess, actionFailure }) {
  try {
    let language = yield AsyncStorage.getItem("languageApp");
    let user = yield AsyncStorage.getItem("user") || undefined;
    user = JSON.parse(user);
    const token = user.token;
    yield setToken(token);
    yield put(UserActions.getMeRequest());
    yield put(AppActions.startupSuccess());
    if (actionSuccess) {
      actionSuccess();
    }
    yield take(AppActions.changeLanguage(language));
  } catch (error) {
    yield put(AppActions.startupFailure());
    if (actionFailure) {
      actionFailure();
    }
  }
}

function* changeLanguageLocal({ language }) {
  yield put(AppActions.showIndicator());
  I18n.locale = language;
  yield AsyncStorage.setItem("languageApp", language);
  yield put(AppActions.hideIndicator());
}
export default appRootSagas;
