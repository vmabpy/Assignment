import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import moment from "moment";

const RecommendItem = (props) => {
  const { item } = props;
  const imageUri = item.imageUrl !== null ? item.imageUrl : "";

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        props.onPressListItem(props.item);
      }}
    >
      <Image source={{ uri: imageUri }} style={styles.image} />
      <View style={styles.viewMain}>
        <Text style={styles.name}>{item.title}</Text>
        <Text>{item.name ? item.name : item.instructorName}</Text>
        <Text style={styles.darkText}>{`${moment(item.updatedAt).format(
          "hh:mm DD/MM/YYYY "
        )} . ${item.totalHours} hours`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    margin: 5,
    marginVertical: 20,
    marginLeft: 20,
  },
  image: {
    height: 70,
    width: 80,
  },
  viewMain: {
    margin: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 14,
  },
  darkText: {
    color: "darkgray",
  },
});

export default RecommendItem;
