import { takeLatest, all, call, put } from "redux-saga/effects";
import { AsyncStorage } from "react-native";
import * as api from "../services/courseServices";
import CourseActions, { CourseTypes } from "../redux/courseRedux";
import AppActions from "../redux/appRedux";

function* courseRootSaga() {
  yield all([
    yield takeLatest(CourseTypes.GET_CATEGORIES_REQUEST, getCategories),
    yield takeLatest(CourseTypes.GET_COURSES_REQUEST, getCourses),
    yield takeLatest(CourseTypes.GET_COURSE_DETAIL_REQUEST, getCourseDetail),
  ]);
}

function* getCategories({ actionSuccess }) {
  yield put(AppActions.showIndicator());
  try {
    const { payload } = yield call(api.getCategories);
    yield put(CourseActions.getCategoriesSuccess(payload));
    if (actionSuccess) {
      actionSuccess(payload);
    }
    yield put(AppActions.hideIndicator());
  } catch (error) {
    yield put(CourseActions.getCategoriesFailure());
    yield put(AppActions.hideIndicator());
    yield put(AppActions.showError(error.message));
  }
}

function* getCourses({ params, actionSuccess }) {
  yield put(AppActions.showIndicator());
  try {
    const response = yield call(api.getCourses, params);
    yield put(CourseActions.getCoursesSuccess(response));
    if (actionSuccess) {
      actionSuccess(response);
    }
    yield put(AppActions.hideIndicator());
  } catch (error) {
    yield put(CourseActions.getCoursesFailure());
    yield put(AppActions.hideIndicator());
    yield put(AppActions.showError(error.message));
  }
}

function* getCourseDetail({ params, actionSuccess }) {
  yield put(AppActions.showIndicator());
  try {
    const { payload } = yield call(api.getDetailCourse, params);
    yield put(CourseActions.getCourseDetailSuccess(payload));
    if (actionSuccess) {
      actionSuccess(payload);
    }
    yield put(AppActions.hideIndicator());
  } catch (error) {
    yield put(CourseActions.getCourseDetailFailure());
    yield put(AppActions.hideIndicator());
    yield put(AppActions.showError(error.message));
  }
}

export default courseRootSaga;
