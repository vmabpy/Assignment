import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { padding } from "../../../globals/constants";
const AuthorCourse = (props) => {
  const { item } = props;
  return (
    <View style={styles.containView}>
      <TouchableOpacity style={styles.container}>
        <Image style={styles.image} source={{ uri: item.instructor.avatar }} />
        <Text style={styles.titleAuthor}>{item.instructor.name} </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containView: {
    flexDirection: "row",
    marginLeft: padding._5,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "darkgray",
    height: 30,
    borderRadius: 10,
    padding: 5,
  },
  image: {
    height: 25,
    width: 25,
    borderRadius: 15,
  },
  titleAuthor: {
    marginLeft: padding._5,
    marginRight: padding._5,
    color: "white",
  },
});

export default AuthorCourse;
