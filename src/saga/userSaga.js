import { takeLatest, all, call, put } from "redux-saga/effects";
import { AsyncStorage } from "react-native";
import _ from "lodash";
import * as api from "../services/userServices";
import UserActions, { UserTypes } from "../redux/userRedux";
import { setToken, request } from "../config/axios";
import AppActions from "../redux/appRedux";

function* userRootSagas() {
  yield all([
    yield takeLatest(UserTypes.LOGIN_REQUEST, login),
    yield takeLatest(UserTypes.LOGIN_GOOGLE_REQUEST, loginGoogle),
    yield takeLatest(UserTypes.REGISTER_REQUEST, register),
    yield takeLatest(UserTypes.FORGOT_PASSWORD_REQUEST, forgotPassword),
    yield takeLatest(UserTypes.LIKE_COURSE_REQUEST, likeCourse),
    yield takeLatest(UserTypes.GET_FAVORITE_REQUEST, getCoursesFavorite),
    yield takeLatest(UserTypes.UPDATE_INFO_REQUEST, updateInfoUser),
    yield takeLatest(UserTypes.CHANGE_PASSWORD_REQUEST, changePassword),
    yield takeLatest(UserTypes.GET_ME_REQUEST, getMeInfo),
    yield takeLatest(UserTypes.CHECK_OWN_COURSE_REQUEST, checkOwnCourse),
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
    yield put(AppActions.showSuccess("You are successfully register"));
  } catch (error) {
    yield put(UserActions.registerFailure(error));
    yield put(AppActions.hideIndicator());
    yield put(AppActions.showError(error.message));
  }
}

function* forgotPassword({ params, actionSuccess }) {
  yield put(AppActions.showIndicator());
  try {
    const response = yield call(api.forgotPassword, params);
    yield put(UserActions.forgotPasswordSuccess(response));
    if (actionSuccess) {
      actionSuccess(response);
    }
    yield put(AppActions.hideIndicator());
    yield put(
      AppActions.showSuccess("The instructions are sent to your email")
    );
  } catch (error) {
    yield put(UserActions.forgotPasswordFailure(error));
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
    yield put(AppActions.showSuccess("You are successfully logged in"));
    yield put(AppActions.startupSuccess());
  } catch (error) {
    yield put(UserActions.loginFailure(error));
    yield put(AppActions.hideIndicator());
    yield put(AppActions.showError(error.message));
  }
}

function* loginGoogle({ params, actionSuccess }) {
  yield put(AppActions.showIndicator());
  try {
    const { userInfo, token } = yield call(api.loginGoogle, params);
    yield put(UserActions.loginGoogleSuccess(userInfo, token));
    yield AsyncStorage.setItem("user", JSON.stringify({ token }));
    if (actionSuccess) {
      actionSuccess({ token });
    }
    setToken(token);
    yield put(AppActions.hideIndicator());
    yield put(
      AppActions.showSuccess("You are successfully logged in by Google")
    );
    yield put(AppActions.startupSuccess());
  } catch (error) {
    yield put(UserActions.loginGoogleFailure(error));
    yield put(AppActions.hideIndicator());
    yield put(AppActions.showError(error.message));
  }
}

function* likeCourse({ params, actionSuccess }) {
  yield put(AppActions.showIndicator());
  try {
    const response = yield call(api.likeCourse, params);
    yield put(UserActions.likeCourseSuccess(response));
    if (actionSuccess) {
      actionSuccess(response);
    }
    yield put(AppActions.showSuccess("Course is added in favorite course"));
    yield put(AppActions.hideIndicator());
  } catch (error) {
    yield put(UserActions.likeCourseFailure());
    yield put(AppActions.hideIndicator());
    yield put(AppActions.showError(error.message));
  }
}

function* getCoursesFavorite({ actionSuccess }) {
  yield put(AppActions.showIndicator());
  try {
    const { payload } = yield call(api.getFavoriteCourses);
    yield put(UserActions.getFavoriteSuccess(payload));
    if (actionSuccess) {
      actionSuccess(payload);
    }
    yield put(AppActions.hideIndicator());
  } catch (error) {
    yield put(UserActions.getFavoriteFailure());
    yield put(AppActions.hideIndicator());
    yield put(AppActions.showError(error.message));
  }
}

function* updateInfoUser({ params, actionSuccess }) {
  yield put(AppActions.showIndicator());
  try {
    const { payload } = yield call(api.updateInfoUser, params);
    yield put(UserActions.updateInfoSuccess(payload));
    if (actionSuccess) {
      actionSuccess(payload);
    }
    yield put(AppActions.showSuccess("Update information successfully"));
    yield put(AppActions.hideIndicator());
  } catch (error) {
    yield put(UserActions.updateInfoFailure());
    yield put(AppActions.hideIndicator());
    yield put(AppActions.showError(error.message));
  }
}

function* changePassword({ params, actionSuccess }) {
  yield put(AppActions.showIndicator());
  try {
    const response = yield call(api.changePassword, params);
    yield put(UserActions.changePasswordSuccess(response));
    if (actionSuccess) {
      actionSuccess(response);
    }
    yield put(AppActions.showSuccess("Change password successfully"));
    yield put(AppActions.hideIndicator());
  } catch (error) {
    yield put(UserActions.changePasswordFailure());
    yield put(AppActions.hideIndicator());
    yield put(AppActions.showError(error.message));
  }
}

function* checkOwnCourse({ params, actionSuccess }) {
  yield put(AppActions.showIndicator());
  try {
    const { payload } = yield call(api.checkOwnCourse, params);
    yield put(UserActions.checkOwnCourseSuccess(payload));
    if (actionSuccess) {
      actionSuccess(payload);
    }
    yield put(AppActions.hideIndicator());
  } catch (error) {
    console.log(error, "HERE");
    yield put(UserActions.checkOwnCourseFailure());
    yield put(AppActions.hideIndicator());
    yield put(AppActions.showError(error.message));
  }
}

function* getMeInfo({ actionSuccess }) {
  yield put(AppActions.showIndicator());
  try {
    const { payload } = yield call(api.getMe);
    yield put(UserActions.getMeSuccess(payload));
    if (actionSuccess) {
      actionSuccess(payload);
    }
    yield put(AppActions.hideIndicator());
  } catch (error) {
    yield put(UserActions.getMeFailure());
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
