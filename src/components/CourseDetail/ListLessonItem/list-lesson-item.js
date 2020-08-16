import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { ICONPREVIEW } from "../../../config/icon";

const ListLessonItem = (props) => {
  const { item, ownCourse } = props;
  return (
    <TouchableOpacity
      style={styles.containerView}
      onPress={() => {
        props.handleClick(item);
      }}
    >
      {item.isPreview && !ownCourse ? (
        <View>
          <Image source={ICONPREVIEW} style={styles.viewImage} />
        </View>
      ) : (
        <View style={styles.viewCircle}></View>
      )}
      <View style={styles.content}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.titleTime}>{item.hours}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flexDirection: "row",
    margin: 10,
    padding: 5,
    alignItems: "center",
  },
  viewCircle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "gray",
  },
  viewImage: {
    height: 20,
    width: 20,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 5,
  },
  title: { flex: 0.9 },
  titleTime: {
    flex: 0.1,
    marginRight: 5,
  },
});

export default ListLessonItem;
