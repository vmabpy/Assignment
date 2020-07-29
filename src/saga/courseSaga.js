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
    yield takeLatest(CourseTypes.GET_NEW_REQUEST, getNew),
    yield takeLatest(CourseTypes.GET_RATE_REQUEST, getRate),
    yield takeLatest(CourseTypes.GET_LIST_TUTOR_REQUEST, getListTutor),
    yield takeLatest(CourseTypes.GET_TUTOR_DETAIL_REQUEST, getTutorDetail),
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

function* getNew({ params, actionSuccess }) {
  yield put(AppActions.showIndicator());
  try {
    const { payload } = yield call(api.getNewCourses, params);
    yield put(CourseActions.getNewSuccess(payload));
    if (actionSuccess) {
      actionSuccess(payload);
    }
    yield put(AppActions.hideIndicator());
  } catch (error) {
    yield put(CourseActions.getNewFailure());
    yield put(AppActions.hideIndicator());
    yield put(AppActions.showError(error.message));
  }
}

function* getRate({ params, actionSuccess }) {
  yield put(AppActions.showIndicator());
  try {
    const { payload } = yield call(api.getRateCourses, params);
    yield put(CourseActions.getRateSuccess(payload));
    if (actionSuccess) {
      actionSuccess(payload);
    }
    yield put(AppActions.hideIndicator());
  } catch (error) {
    yield put(CourseActions.getRateFailure());
    yield put(AppActions.hideIndicator());
    yield put(AppActions.showError(error.message));
  }
}

function* getListTutor({ actionSuccess }) {
  yield put(AppActions.showIndicator());
  try {
    const { payload } = yield call(api.getListTutor);
    yield put(CourseActions.getListTutorSuccess(payload));
    if (actionSuccess) {
      actionSuccess(payload);
    }
    yield put(AppActions.hideIndicator());
  } catch (error) {
    yield put(CourseActions.getListTutorFailure());
    yield put(AppActions.hideIndicator());
    yield put(AppActions.showError(error.message));
  }
}

function* getTutorDetail({ params, actionSuccess }) {
  yield put(AppActions.showIndicator());
  try {
    const { payload } = yield call(api.getTutorDetail, params);
    yield put(CourseActions.getTutorDetailSuccess(payload));
    if (actionSuccess) {
      actionSuccess(payload);
    }
    yield put(AppActions.hideIndicator());
  } catch (error) {
    yield put(CourseActions.getTutorDetailFailure());
    yield put(AppActions.hideIndicator());
    yield put(AppActions.showError(error.message));
  }
}
export default courseRootSaga;
