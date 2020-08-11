import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { padding } from "../../../globals/constants";
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
      <Text style={styles.titleItem}>{item.name}</Text>
      <Text style={styles.titleTime}>{item.hours}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flexDirection: "row",
    margin: padding._10,
    height: 40,
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
  titleItem: {
    marginLeft: 20,
  },
  titleTime: {
    position: "absolute",
    right: 0,
  },
});

export default ListLessonItem;
