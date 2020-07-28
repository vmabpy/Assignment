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

const Browse = (props) => {
  const [newData, setNewData] = useState([]);
  const [recommendData, setRecommedData] = useState([]);

  const params = { limit: 10, page: 1 };
  const { getNew, getRate } = props;

  const handleNewRelease = () => {
    props.navigation.navigate("NewRealse", { newData });
  };

  const handleRecommend = () => {
    props.navigation.navigate("Recommendation", { recommendData });
  };

  useEffect(() => {
    const params = { limit: 10, page: 1 };
    getNew(params, (res) => {
      setNewData(res);
    });
    getRate(params, (res) => {
      setRecommedData(res);
    });
  });

  return (
    <ScrollView>
      <ImageButton width="98%" title="NEW RELEASE" onPress={handleNewRelease} />
      <ImageButton
        width="98%"
        title="RECOMMEND FOR YOU"
        onPress={handleRecommend}
      />
      <ListLanguage title="Popular skills" navigation={props.navigation} />
      {/* <Trending /> */}
      <LearningPath title="Path" navigation={props.navigation} />
      <Authors title="Top Authors" navigation={props.navigation} />
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchTopProps = (dispatch) => ({
  getNew: (params, actionSuccess) =>
    dispatch(CourseActions.getNewRequest(params, actionSuccess)),
  getRate: (params, actionSuccess) =>
    dispatch(CourseActions.getRateRequest(params, actionSuccess)),
});
export default connect(mapStateToProps, mapDispatchTopProps)(Browse);
