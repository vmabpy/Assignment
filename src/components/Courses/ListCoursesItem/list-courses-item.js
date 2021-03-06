import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import moment from "moment";

const ListCoursesItem = (props) => {
  const { item } = props;
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        props.onPressListItem(props.item);
      }}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.viewMain}>
        <Text style={styles.name}>{item.title}</Text>
        <Text>{item.name ? item.name : item.instructorName}</Text>
        <Text style={styles.darkText}>{`${moment(item.updatedAt).format(
          "DD/MM/YYYY "
        )} . ${item.totalHours} hours`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    marginLeft: 10,
    marginVertical: 20,
  },
  image: {
    height: 70,
    width: 80,
  },
  viewMain: {
    flex: 1,
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

export default ListCoursesItem;
