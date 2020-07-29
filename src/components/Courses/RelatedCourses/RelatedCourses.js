import React, { useState } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import ListCoursesItem from "../../Courses/ListCoursesItem/list-courses-item";

const RelatedCourses = (props) => {
  const {
    route: { params },
  } = props;

  const relatedCourses = params ? params.relatedCourses : undefined;

  console.log(relatedCourses, "Related");
  const onPressListItem = (item) => {
    props.navigation.navigate("CourseDetail", { item });
  };

  const FlatListItemSeparator = () => {
    return <View style={styles.separator}></View>;
  };
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={relatedCourses}
        renderItem={({ item }) => (
          <ListCoursesItem
            navigation={props.navigation}
            item={item}
            onPressListItem={onPressListItem}
          />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={FlatListItemSeparator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#E7E8E8",
  },
});

export default RelatedCourses;
