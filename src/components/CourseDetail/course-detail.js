import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Share,
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
import { ICONSHARE } from "../../config/icon";
import StarRating from "react-native-star-rating";
import { Ionicons } from "@expo/vector-icons";
import AveragePoint from "../../config/function/averagePoint";

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
  const [visibleWeb, setVisibleWeb] = useState(false);
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
            </View>

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
