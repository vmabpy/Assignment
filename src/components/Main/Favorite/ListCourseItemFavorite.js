import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import moment from "moment";

const ListCourseItemFavorite = (props) => {
  const { item } = props;
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        props.onPressListItem(props.item);
      }}
    >
      <Image source={{ uri: item.courseImage }} style={styles.image} />
      <View style={{ margin: 10, flex: 1 }}>
        <Text>{item.courseTitle}</Text>
        <Text style={styles.darkText}>{item.instructorName}</Text>
        {/* <Text style={styles.darkText}>{`${moment(item.updatedAt).format(
          "hh:mm DD/MM/YYYY "
        )} . ${item.totalHours} hours`}</Text> */}
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
  darkText: {
    color: "darkgray",
  },
});

export default ListCourseItemFavorite;
