import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
import VideoPlayer from "./VideoPlayer/video-player";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { padding } from "../../globals/constants";
import ListOption from "./ListOption/list-option";
import AuthorCourse from "./ListAuthorDetail/author-course";
import ReviewItem from "./ListReviewCourse/review-item";
import ListLessonItem from "./ListLessonItem/list-lesson-item";
import ListLesson from "./ListLesson/list-lesson";
import { dimension } from "../../globals/dimension";
import moment from "moment";
import { connect } from "react-redux";
import loGet from "lodash/get";
import CourseActions from "../../redux/courseRedux";
import UserActions from "../../redux/userRedux";
import WebView from "react-native-webview";
import configs from "../../config/configs";
const APIWEB = "https://itedu.me";
const CourseDetail = (props) => {
  const [urlVideo, setUrlVideo] = useState(undefined);
  const {
    route: { params },
    getCourseDetail,
    likeCourse,
    joinCourse,
  } = props;
  const item = params ? params.item : undefined;
  const id = item ? item.id : undefined;

  const [visibleWeb, setVisibleWeb] = useState(false);
  props.navigation.setOptions({
    title: item.title ? item.title : item.courseTitle,
  });

  const [dataDetail, setDataDetail] = useState(undefined);

  useEffect(() => {
    if (id) {
      const params = { id };
      getCourseDetail(params, (res) => {
        setDataDetail(res);
      });
    }
  }, [id, getCourseDetail]);
  const review = [
    {
      id: 0,
      imageRoute: require("../../../assets/ic_purpose.png"),
      title: "Take a learning check",
    },
    {
      id: 1,
      imageRoute: require("../../../assets/ic_related_path.png"),
      title: "View related path and course",
    },
  ];

  const handleClick = (item) => {
    // if (item.isPreview) {
    //   setUrlVideo(item.videoUrl);
    // } else {
    //   Alert.alert("Remind", "Joining or payment course to learn more. Please!");
    // }
    setUrlVideo(item.videoUrl);
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
        const params = {
          courseId: item.id,
        };
        joinCourse(params);
      } else {
        setVisibleWeb(true);
      }
    }
  };

  const handleRelatedCourse = (relatedCourses) => {
    props.navigation.navigate("RelatedCourses", { relatedCourses });
  };
  return dataDetail ? (
    <View style={styles.container}>
      {!visibleWeb ? (
        <View style={styles.container}>
          <TouchableOpacity style={styles.buttonBack}></TouchableOpacity>
          <VideoPlayer dataDetail={dataDetail} urlVideo={urlVideo} />
          <ScrollView>
            <Text style={styles.title}>{`${dataDetail.title}`}</Text>
            <AuthorCourse item={dataDetail} />
            <Text style={styles.darkText}>{`${moment(
              dataDetail.createdAt
            ).format("hh:mm DD/MM/YYYY ")} . ${
              dataDetail.totalHours
            } hours`}</Text>
            <ListOption item={dataDetail} handleOption={handleOption} />
            <ReviewItem itemTitle={review[0]} item={{}} onPress={() => {}} />
            <ReviewItem
              itemTitle={review[1]}
              item={dataDetail.coursesLikeCategory}
              onPress={handleRelatedCourse}
            />
            <ListLesson data={dataDetail.section} handleClick={handleClick} />
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
    marginTop: padding._5,
    marginLeft: padding._10,
    color: "darkgray",
  },
});

const mapStateToProps = (state) => ({});
const mapDispatchTopProps = (dispatch) => ({
  getCourseDetail: (params, actionSuccess) =>
    dispatch(CourseActions.getCourseDetailRequest(params, actionSuccess)),
  likeCourse: (params, actionSuccess) =>
    dispatch(UserActions.likeCourseRequest(params, actionSuccess)),
  joinCourse: (params, actionSuccess) =>
    dispatch(CourseActions.paymentCourseRequest(params, actionSuccess)),
});
export default connect(mapStateToProps, mapDispatchTopProps)(CourseDetail);
