import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ListExercisesItem = (props) => {
  const { item } = props;
  return (
    <TouchableOpacity style={styles.containerView}>
      <Text style={styles.titleItem}>{item.content}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
  },
  titleItem: {
    marginLeft: 20,
  },
});

export default ListExercisesItem;
