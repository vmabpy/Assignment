import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import moment from "moment";

const LearningPathItem = (props) => {
  const { item } = props;
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        props.onPressListItem(item);
      }}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={{ margin: 5 }}>
        <Text>{item.title}</Text>
        <Text style={styles.darkText}>
          {item.name ? item.name : item.instructorName}
        </Text>
        <Text style={styles.darkText}>{`${moment(item.updatedAt).format(
          "hh:mm DD/MM/YYYY "
        )}`}</Text>
        <Text style={styles.darkText}>{`${item.totalHours} hours`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    margin: 5,
    height: 200,
    width: 200,
    backgroundColor: "lightgray",
  },
  image: {
    height: 100,
    width: 200,
  },
  darkText: {
    color: "darkgray",
  },
});

export default LearningPathItem;
