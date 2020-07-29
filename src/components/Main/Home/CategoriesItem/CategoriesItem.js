import React from "react";
import { View, TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import { ICONNEXT } from "../../../../config/icon";

const CategoriesItem = (props) => {
  const { title, handlePress } = props;
  return (
    <TouchableOpacity style={categoryStyle.touch} onPress={handlePress}>
      <Text style={categoryStyle.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const categoryStyle = StyleSheet.create({
  touch: {
    flex: 1,
    margin: 20,
    height: 100,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#FFAC84",
  },
  title: {
    textAlign: "center",
    alignSelf: "center",
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});

export default CategoriesItem;
