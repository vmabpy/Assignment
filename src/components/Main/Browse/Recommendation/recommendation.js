import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ListCoursesItem from "../../../Courses/ListCoursesItem/list-courses-item";

const Recommendation = (props) => {
  const {
    route: { params },
  } = props;
  let recommendData = params ? params.recommendData : [];
  const onPressListItem = (item) => {
    props.navigation.navigate("CourseDetail", { item });
  };
  const FlatListItemSeparator = () => {
    return <View style={styles.separator}></View>;
  };

  return (
    <View>
      <FlatList
        data={recommendData}
        renderItem={({ item }) => (
          <ListCoursesItem
            item={item}
            navigation={props.navigation}
            onPressListItem={onPressListItem}
          />
        )}
        ItemSeparatorComponent={FlatListItemSeparator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 0.5,
    width: "100%",
    backgroundColor: "gray",
  },
});

export default Recommendation;
