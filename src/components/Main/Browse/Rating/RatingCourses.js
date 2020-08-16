import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ListCoursesItem from "../../../Courses/ListCoursesItem/list-courses-item";

const RatingCourse = (props) => {
  const {
    route: { params },
  } = props;
  let ratingData = params ? params.ratingData : [];
  const onPressListItem = (item) => {
    props.navigation.navigate("CourseDetail", { item });
  };
  return (
    <View>
      <FlatList
        data={ratingData}
        renderItem={({ item }) => (
          <ListCoursesItem
            item={item}
            navigation={props.navigation}
            onPressListItem={onPressListItem}
          />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={FlatListItemSeparator}
      />
    </View>
  );
};

const FlatListItemSeparator = () => {
  return <View style={styles.separator}></View>;
};

const styles = StyleSheet.create({
  separator: {
    height: 0.5,
    width: "100%",
    backgroundColor: "gray",
  },
});

export default RatingCourse;
