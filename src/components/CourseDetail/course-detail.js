import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Share,
  Alert,
} from "react-native";
import VideoPlayer from "./VideoPlayer/video-player";
import { padding } from "../../globals/constants";
import ListOption from "./ListOption/list-option";
import AuthorCourse from "./ListAuthorDetail/author-course";
import ReviewItem from "./ListReviewCourse/review-item";
import ListLesson from "./ListLesson/list-lesson";
import moment from "moment";
import { connect } from "react-redux";
import loGet from "lodash/get";
import CourseActions from "../../redux/courseRedux";
import UserActions from "../../redux/userRedux";
import WebView from "react-native-webview";
import { ICONSHARE, ICONEXERCISE, ICONPATH } from "../../config/icon";
import StarRating from "react-native-star-rating";
import ModalExercises from "./Exercises/ModalExercises";
import ModalComments from "./Comments/ModalComments";
import I18n from "ex-react-native-i18n";

const CourseDetail = (props) => {
  const {
    route: { params },
    getCourseDetail,
    likeCourse,
    joinCourse,
    checkOwnCourse,
    getCurrentVideo,
    updateCurrentVideo,
  } = props;
  const item = params ? params.item : undefined;
  const id = item ? item.id : undefined;
  const APIWEB = "https://itedu.me";

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `${APIWEB}/course-detail/${dataDetail.id}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  props.navigation.setOptions({
    title: item.title ? item.title : item.courseTitle,
    headerRight: () => (
      <TouchableOpacity onPress={onShare}>
        <View style={{ marginRight: 20 }}>
          <Image source={ICONSHARE} style={styles.imageHeader} />
        </View>
      </TouchableOpacity>
    ),
  });

  const initalVideo = {
    urlVideo: undefined,
    currentTime: 0,
  };

  const [infoVideo, setInfoVideo] = useState(initalVideo);
  const [visibleWeb, setVisibleWeb] = useState(false);
  const [dataDetail, setDataDetail] = useState(undefined);
  const [itemLesson, setItemLesson] = useState(undefined);
  const [visibleModalEx, setVisibleModalEx] = useState(false);
  const [visibleModalComment, setVisibleModalComment] = useState(false);
  const [ownCourse, setOwnCourse] = useState(false);
  useEffect(() => {
    if (id) {
      const params = { id };
      getCourseDetail(params, (res) => {
        setDataDetail(res);
      });

      const _params = {
        courseId: id,
      };
      checkOwnCourse(_params, (res) => {
        setOwnCourse(res.isUserOwnCourse);
      });
    }
  }, [id, ownCourse, visibleModalComment]);

  // useEffect(() => {
  //   console.log("chon xong thi update", loGet(itemLesson, "id", undefined));
  //   if (itemLesson !== undefined && id && ownCourse) {
  //     const paramsCurrent = {
  //       courseId: id,
  //       lessonId: itemLesson.id,
  //     };
  //     console.log(paramsCurrent, "params");
  //     getCurrentVideo(paramsCurrent, (res) => {
  //       console.log("get current video", res);
  //       setUrlVideo(res.videoUrl);
  //       if (res.currentTime !== null) {
  //         setCurrentTime(res.currentTime);
  //       }
  //     });
  //   }
  // }, [loGet(itemLesson, "id", undefined)]);

  const review = [
    {
      id: 0,
      imageRoute: ICONEXERCISE,
      title: I18n.t("key_exercises"),
    },
    {
      id: 1,
      imageRoute: ICONPATH,
      title: I18n.t("key_related_course"),
    },
  ];

  const handleClick = (item) => {
    if (item.isPreview || ownCourse) {
      setItemLesson(item);
      const paramsCurrent = {
        courseId: id,
        lessonId: item.id,
      };
      getCurrentVideo(paramsCurrent, (res) => {
        setInfoVideo({
          urlVideo: res.videoUrl,
          currentTime: res.currentTime !== null ? res.currentTime : 0,
        });
      });
    } else {
      Alert.alert(I18n.t("key_remind"), I18n.t("key_remind_joining"));
    }
  };

  const handleUpdateCurrentVideoYoutube = (time) => {
    // setCurrentTime(time);
    setInfoVideo((prevState) => ({
      ...prevState,
      currentTime: time,
    }));
    if (itemLesson !== undefined && itemLesson.id) {
      const paramsVideo = {
        lessonId: itemLesson.id,
        currentTime: time,
      };
      updateCurrentVideo(paramsVideo);
    }
  };

  const handleOption = (optionItem) => {
    if (optionItem.id === 1) {
      const params = {
        courseId: item.id,
      };
      likeCourse(params);
    } else if (optionItem.id === 2) {
    } else if (optionItem.id === 3) {
      if (dataDetail.price === 0) {
        if (ownCourse) {
          Alert.alert(I18n.t("key_remind"), I18n.t("key_remind_joined"));
        } else {
          const params = {
            courseId: item.id,
          };
          joinCourse(params, () => {
            checkOwnCourse(params, (res) => {
              setOwnCourse(res.isUserOwnCourse);
            });
          });
        }
      } else {
        setVisibleWeb(true);
      }
    }
  };

  const handleVisibleModal = () => {
    setVisibleModalEx((visible) => !visible);
  };

  const handleVisibleModalComment = () => {
    setVisibleModalComment((visible) => !visible);
  };

  const handleReviewItem = (itemReview) => {
    if (itemReview.id === 1) {
      const relatedCourses = dataDetail.coursesLikeCategory
        ? dataDetail.coursesLikeCategory
        : [];
      props.navigation.navigate("RelatedCourses", { relatedCourses });
    } else if (itemReview.id === 0) {
      setVisibleModalEx(true);
    }
  };

  const handleShowComments = () => {
    setVisibleModalComment(true);
  };
  return dataDetail ? (
    <View style={styles.container}>
      {!visibleWeb ? (
        <View style={styles.container}>
          <TouchableOpacity style={styles.buttonBack}></TouchableOpacity>
          <VideoPlayer
            dataDetail={dataDetail}
            urlVideo={infoVideo.urlVideo}
            currentTime={infoVideo.currentTime}
            handleUpdateCurrentVideoYoutube={handleUpdateCurrentVideoYoutube}
          />
          <ScrollView>
            <Text style={styles.title}>{`${dataDetail.title}`}</Text>
            <AuthorCourse item={dataDetail} />
            <View style={styles.viewInfo}>
              <Text style={styles.darkText}>{`${moment(
                dataDetail.updatedAt
              ).format("DD/MM/YYYY ")} . ${dataDetail.totalHours} hours`}</Text>
              <StarRating
                disabled={true}
                emptyStar={"ios-star-outline"}
                fullStar={"ios-star"}
                halfStar={"ios-star-half"}
                iconSet={"Ionicons"}
                maxStars={5}
                rating={
                  (dataDetail.formalityPoint +
                    dataDetail.contentPoint +
                    dataDetail.presentationPoint) /
                  3
                }
                fullStarColor={"#FADB13"}
                starSize={20}
                containerStyle={{ marginLeft: padding._5 }}
              />
              <TouchableOpacity
                style={styles.comment}
                onPress={handleShowComments}
              >
                <Text style={{ color: "blue" }}>
                  ({dataDetail.ratedNumber})
                </Text>
              </TouchableOpacity>
            </View>

            <ListOption
              item={dataDetail}
              handleOption={handleOption}
              ownCourse={ownCourse}
            />
            <ReviewItem
              itemReview={review[0]}
              handleReviewItem={handleReviewItem}
            />
            <ReviewItem
              itemReview={review[1]}
              handleReviewItem={handleReviewItem}
            />
            <ListLesson
              data={dataDetail.section}
              handleClick={handleClick}
              ownCourse={ownCourse}
            />
            {visibleModalEx && (
              <ModalExercises
                itemLesson={itemLesson}
                modalVisible={visibleModalEx}
                handleModalVisible={handleVisibleModal}
              />
            )}

            {visibleModalComment && (
              <ModalComments
                dataComments={dataDetail}
                ownCourse={ownCourse}
                modalVisibleComments={visibleModalComment}
                handleModalVisibleComments={handleVisibleModalComment}
              />
            )}
          </ScrollView>
        </View>
      ) : (
        <View style={styles.container}>
          <WebView
            source={{
              uri: `${APIWEB}/payment/${dataDetail.id}`,
            }}
            startInLoadingState={true}
            renderLoading={() => (
              <ActivityIndicator
                color="black"
                style={{
                  flex: 1,
                  backgroundColor: "white",
                  justifyContent: "center",
                }}
              />
            )}
          />
        </View>
      )}
    </View>
  ) : (
    <View />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageIcon: {
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  viewInfo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: padding._5,
    marginLeft: padding._10,
  },
  buttonBack: {
    position: "absolute",
    top: 50,
    left: 50,
    backgroundColor: "red",
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  title: {
    marginTop: padding._10,
    marginLeft: padding._10,
    fontSize: padding._20,
    fontWeight: "bold",
  },
  darkText: {
    color: "darkgray",
  },
  imageHeader: {
    height: 20,
    width: 20,
  },
  comment: {
    marginLeft: 5,
    paddingHorizontal: 5,
  },
  modalView: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "#C6C6C6",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  viewHeader: {
    flexDirection: "row",
    backgroundColor: "blue",
    height: 40,
    alignItems: "center",
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    textAlign: "center",
  },
});

const mapStateToProps = (state) => ({});
const mapDispatchTopProps = (dispatch) => ({
  getCourseDetail: (params, actionSuccess) =>
    dispatch(CourseActions.getCourseDetailRequest(params, actionSuccess)),
  likeCourse: (params, actionSuccess) =>
    dispatch(UserActions.likeCourseRequest(params, actionSuccess)),
  checkOwnCourse: (params, actionSuccess) =>
    dispatch(UserActions.checkOwnCourseRequest(params, actionSuccess)),
  joinCourse: (params, actionSuccess) =>
    dispatch(CourseActions.paymentCourseRequest(params, actionSuccess)),
  getCurrentVideo: (params, actionSuccess) =>
    dispatch(CourseActions.getCurrentVideoRequest(params, actionSuccess)),
  updateCurrentVideo: (params, actionSuccess) =>
    dispatch(CourseActions.updateCurrentVideoRequest(params, actionSuccess)),
});
export default connect(mapStateToProps, mapDispatchTopProps)(CourseDetail);
