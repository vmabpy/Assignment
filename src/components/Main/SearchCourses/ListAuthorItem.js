import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const ListAuthorItem = (props) => {
  const { item } = props;
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        props.onPressItemTutor(props.item);
      }}
    >
      <Image style={styles.image} source={{ uri: item.avatar }} />
      <View style={styles.viewMain}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.darkText}>${item.numcourses} courses</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    marginLeft: 10,
    marginVertical: 10,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
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

export default ListAuthorItem;
