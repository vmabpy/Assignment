import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  Image,
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

const CourseDetail = (props) => {
  const [idVideo, setIdVideo] = useState(undefined);
  const {
    route: { params },
    getCourseDetail,
  } = props;
  const item = params ? params.item : undefined;
  const id = item ? item.id : undefined;

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
    // console.log(item.id);
    setIdVideo(item.id);
  };

  const handleRelatedCourse = (relatedCourses) => {
    props.navigation.navigate("RelatedCourses", { relatedCourses });
  };
  return dataDetail ? (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonBack}></TouchableOpacity>
      <VideoPlayer id={idVideo} dataVideo={dataDetail} />
      <ScrollView>
        <Text style={styles.title}>{`${dataDetail.title}`}</Text>
        <AuthorCourse item={dataDetail} />
        <Text style={styles.darkText}>{`${moment(dataDetail.createdAt).format(
          "hh:mm DD/MM/YYYY "
        )} . ${dataDetail.totalHours} hours`}</Text>
        <ListOption item={dataDetail} />
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
});
export default connect(mapStateToProps, mapDispatchTopProps)(CourseDetail);
