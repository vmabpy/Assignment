import { takeLatest, all, call, put, cps } from "redux-saga/effects";
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
    yield takeLatest(CourseTypes.GET_RECOMMEND_REQUEST, getRecommend),
    yield takeLatest(CourseTypes.GET_LIST_TUTOR_REQUEST, getListTutor),
    yield takeLatest(CourseTypes.GET_TUTOR_DETAIL_REQUEST, getTutorDetail),
    yield takeLatest(CourseTypes.SEARCH_COURSES_REQUEST, searchCourses),
    yield takeLatest(CourseTypes.PAYMENT_COURSE_REQUEST, paymentCourses),
    yield takeLatest(CourseTypes.LIST_EXERCISES_LESSON_REQUEST, listExercises),
    yield takeLatest(CourseTypes.EXERCISES_TEST_REQUEST, exercisesTest),
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

function* getRecommend({ params, actionSuccess }) {
  yield put(AppActions.showIndicator());
  try {
    const { payload } = yield call(api.getRecommendCourses, params);
    yield put(CourseActions.getRecommendSuccess(payload));
    if (actionSuccess) {
      actionSuccess(payload);
    }
    yield put(AppActions.hideIndicator());
  } catch (error) {
    yield put(CourseActions.getRecommendFailure());
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

function* searchCourses({ params, actionSuccess }) {
  yield put(AppActions.showIndicator());
  try {
    const response = yield call(api.searchCourses, params);
    yield put(CourseActions.searchCoursesSuccess(params.keyword));
    if (actionSuccess) {
      actionSuccess(response);
    }
    yield put(AppActions.hideIndicator());
  } catch (error) {
    yield put(CourseActions.searchCoursesFailure());
    yield put(AppActions.hideIndicator());
    yield put(AppActions.showError(error.message));
  }
}

function* paymentCourses({ params, actionSuccess }) {
  yield put(AppActions.showIndicator());
  try {
    const response = yield call(api.paymentCourse, params);
    yield put(CourseActions.paymentCourseSuccess(response));
    if (actionSuccess) {
      actionSuccess(response);
    }
    yield put(AppActions.showSuccess("Joined course and learning more now!"));
    yield put(AppActions.hideIndicator());
  } catch (error) {
    console.log(error);
    yield put(CourseActions.paymentCourseFailure());
    yield put(AppActions.hideIndicator());
    yield put(AppActions.showError(error.message));
  }
}

function* listExercises({ params, actionSuccess }) {
  yield put(AppActions.showIndicator());
  try {
    const { payload } = yield call(api.listExercisesLesson, params);
    yield put(CourseActions.listExercisesLessonSuccess(payload));
    if (actionSuccess) {
      actionSuccess(payload);
    }
    yield put(AppActions.hideIndicator());
  } catch (error) {
    yield put(CourseActions.listExercisesLessonFailure());
    yield put(AppActions.hideIndicator());
    yield put(AppActions.showError(error.message));
  }
}

function* exercisesTest({ params, actionSuccess }) {
  yield put(AppActions.showIndicator());
  try {
    const { payload } = yield call(api.exercisesTest, params);
    yield put(CourseActions.exercisesTestSuccess(payload));
    if (actionSuccess) {
      actionSuccess(payload);
    }
    yield put(AppActions.hideIndicator());
  } catch (error) {
    console.log(JSON.stringify(error));
    yield put(CourseActions.exercisesTestFailure());
    yield put(AppActions.hideIndicator());
    yield put(AppActions.showError(error.message));
  }
}
export default courseRootSaga;
