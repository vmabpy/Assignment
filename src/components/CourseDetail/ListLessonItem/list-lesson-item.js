import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { padding } from "../../../globals/constants";
import { TouchableOpacity } from "react-native-gesture-handler";

const ListLessonItem = (props) => {
  const { item } = props;
  return (
    <TouchableOpacity
      style={styles.containerView}
      onPress={() => {
        props.handleClick(item);
      }}
    >
      <View style={styles.viewCircle}></View>
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
  titleItem: {
    marginLeft: 20,
  },
  titleTime: {
    position: "absolute",
    right: 0,
  },
});

export default ListLessonItem;
