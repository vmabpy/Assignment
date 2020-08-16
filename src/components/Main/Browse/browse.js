import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import ImageButton from "../../Common/image-button";
import ListLanguage from "./ListLanguage/list-language";
import LearningPath from "./LearningPath/learning-path";
import Trending from "./Trending/trending";
import Authors from "./Authors/AuthorList/list-author";
import loGet from "lodash/get";
import { connect } from "react-redux";
import CourseActions from "../../../redux/courseRedux";
import I18n from "ex-react-native-i18n";

const Browse = (props) => {
  const [newData, setNewData] = useState([]);
  const [recommendData, setRecommedData] = useState([]);
  const [rating, setRating] = useState([]);
  const [listTutor, setListTutor] = useState([]);

  const { getNew, getRate, getListTutor, getRecommend, userInfo } = props;

  const handleNewRelease = () => {
    props.navigation.navigate("NewRealse", { newData });
  };

  const handleRecommend = () => {
    props.navigation.navigate("Recommendation", { recommendData });
  };

  const handleShowRating = () => {
    props.navigation.navigate("RatingCourse", { ratingData: rating });
  };

  useEffect(() => {
    const params = { limit: 10, page: 1 };
    getNew(params, (res) => {
      setNewData(res);
    });
    getRate(params, (res) => {
      setRating(res);
    });
    const _params = {
      id: userInfo.id,
      limit: 10,
      offset: 0,
    };
    getRecommend(_params, (res) => {
      setRecommedData(res);
    });
    getListTutor((res) => {
      setListTutor(res);
    });
  }, [getListTutor, getRecommend]);

  return (
    <ScrollView>
      <ImageButton
        width="98%"
        title={I18n.t("key_up_new_releases")}
        onPress={handleNewRelease}
      />
      <ImageButton
        width="98%"
        title={I18n.t("key_recommend")}
        onPress={handleRecommend}
      />
      <ListLanguage
        title={I18n.t("key_popular_skills")}
        navigation={props.navigation}
      />
      {/* <Trending /> */}
      <LearningPath
        title={I18n.t("key_rating")}
        navigation={props.navigation}
        ratingData={rating}
        handleShowRating={handleShowRating}
      />
      <Authors
        title={I18n.t("key_top_athors")}
        navigation={props.navigation}
        listTutor={listTutor}
      />
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  userInfo: loGet(state, ["user", "userInfo"], {}),
});
const mapDispatchTopProps = (dispatch) => ({
  getNew: (params, actionSuccess) =>
    dispatch(CourseActions.getNewRequest(params, actionSuccess)),
  getRate: (params, actionSuccess) =>
    dispatch(CourseActions.getRateRequest(params, actionSuccess)),
  getRecommend: (params, actionSuccess) =>
    dispatch(CourseActions.getRecommendRequest(params, actionSuccess)),
  getListTutor: (actionSuccess) => {
    dispatch(CourseActions.getListTutorRequest(actionSuccess));
  },
});
export default connect(mapStateToProps, mapDispatchTopProps)(Browse);
