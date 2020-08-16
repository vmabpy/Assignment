import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import ListCoursesItem from "../../../Courses/ListCoursesItem/list-courses-item";
import I18n from "ex-react-native-i18n";

const LearningPathDetail = (props) => {
  let item = props.route.params.item;
  props.navigation.setOptions({ title: "" });
  const onPressListItem = (item) => {
    props.navigation.navigate("CourseDetail", { item });
  };
  const FlatListItemSeparator = () => {
    return <View style={styles.separator}></View>;
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={item.imageUri} />
        <View style={{ margin: 5, justifyContent: "space-between" }}>
          <Text>{item.title}</Text>
          <Text style={styles.darkText}>{`${item.total} courses}`}</Text>
          <Text style={styles.darkText}>{`${item.duration}`}</Text>
        </View>
      </View>
      <FlatListItemSeparator />

      <View style={{ margin: 5, height: 30, justifyContent: "center" }}>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          {I18n.t("key_courses")}
        </Text>
      </View>
      <FlatListItemSeparator />
      <FlatList
        data={item.courses}
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
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    margin: 5,
  },
  image: {
    height: 90,
    width: 180,
  },
  darkText: {
    color: "darkgray",
  },
  separator: {
    height: 0.5,
    width: "100%",
    backgroundColor: "gray",
  },
});
export default LearningPathDetail;
