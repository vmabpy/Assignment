import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useState,
} from "react-native";

const ListExercisesItem = (props) => {
  const { item } = props;
  return (
    <View style={styles.containerView}>
      <TouchableOpacity style={styles.circle}></TouchableOpacity>
      <Text style={styles.titleItem}>{item.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    marginLeft: 10,
  },
  titleItem: {
    marginLeft: 20,
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ACACAC",
    alignItems: "center",
    justifyContent: "center",
  },
  checkedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#794F9B",
  },
});

export default ListExercisesItem;
