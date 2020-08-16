import React from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import SectionCoursesItem from "../../Home/SectionCoursesItem/section-courses-item";
import { coureseLearningPath } from "../../../../globals/courses";
import ListCoursesItem from "../../../Courses/ListCoursesItem/list-courses-item";
import LearningPathItem from "../LearningPath/learning-path-item";
import { ICONNEXT } from "../../../../config/icon";
import { BLACK } from "../../../../config/color";
import I18n from "ex-react-native-i18n";

const LearningPath = (props) => {
  const { ratingData = [] } = props;
  const onPressListItem = (item) => {
    props.navigation.navigate("CourseDetail", { item });
  };

  const renderListItem = (courses) => {
    return courses.map((item) => (
      <LearningPathItem
        item={item}
        navigation={props.navigation}
        onPressListItem={onPressListItem}
      />
      //   <ListCoursesItem
      //     item={item}
      //     navigation={props.navigation}
      //     onPressListItem={onPressListItem}
      //   />
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewTitle}>
        <Text style={styles.text}>{props.title}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.handleShowRating();
          }}
        >
          <Text style={styles.titleAll}>{I18n.t("key_see_all")}</Text>
          <Image source={ICONNEXT} style={styles.image} />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true}>{renderListItem(ratingData)}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  viewTitle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 5,
    marginBottom: 5,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 8,
    backgroundColor: "#C6C6C6",
  },
  text: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },
  titleAll: {
    fontSize: 12,
  },
  image: {
    height: 10,
    width: 10,
    tintColor: BLACK,
  },
});

export default LearningPath;
