import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  Share,
} from "react-native";

const ListCoursesItem = (props) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        props.onPressListItem(props.item);
      }}
    >
      <Image source={props.item.imageUri} style={styles.image} />
      <View style={{ margin: 5 }}>
        <Text>{props.item.title}</Text>
        <Text style={styles.darkText}>
          {props.item["instructor.user.name"]}
        </Text>
        <Text
          style={styles.darkText}
        >{`${props.item.createdAt} . ${props.item.totalHours}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    margin: 5,
    // borderBottomColor: 'gray',
    // borderBottomWidth: 1,
  },
  image: {
    height: 70,
    width: 80,
  },
  darkText: {
    color: "darkgray",
  },
});

export default ListCoursesItem;
