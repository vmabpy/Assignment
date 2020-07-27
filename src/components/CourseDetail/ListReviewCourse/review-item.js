import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { padding } from "../../../globals/constants";
import { TouchableOpacity } from "react-native-gesture-handler";

const ReviewItem = (props) => {
  const { itemTitle } = props;
  return (
    <TouchableOpacity
      style={styles.containerView}
      onPress={() => {
        props.onPress(props.item);
      }}
    >
      <Image style={styles.image} source={itemTitle.imageRoute} />
      <Text style={styles.title}>{itemTitle.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flexDirection: "row",
    margin: padding._5,
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    borderRadius: 5,
    backgroundColor: "darkgray",
  },
  image: {
    height: 20,
    width: 20,
  },
  title: {
    marginLeft: padding._5,
    color: "white",
  },
});

export default ReviewItem;
