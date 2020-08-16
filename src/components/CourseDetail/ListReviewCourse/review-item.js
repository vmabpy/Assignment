import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { padding } from "../../../globals/constants";
import { TouchableOpacity } from "react-native-gesture-handler";

const ReviewItem = (props) => {
  const { itemReview } = props;
  return (
    <TouchableOpacity
      style={styles.containerView}
      onPress={() => {
        props.handleReviewItem(itemReview);
      }}
    >
      <Image style={styles.image} source={itemReview.imageRoute} />
      <Text style={styles.title}>{itemReview.title}</Text>
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
    backgroundColor: "#C6C6C6",
  },
  image: {
    height: 20,
    width: 20,
  },
  title: {
    marginLeft: padding._5,
  },
});

export default ReviewItem;
