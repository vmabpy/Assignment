import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { ICONNEXT } from "../../config/icon";

const ProfileItem = (props) => {
  const { item } = props;
  return (
    <TouchableOpacity
      style={styles.contain}
      onPress={() => {
        props.onPressItem(props.item);
      }}
    >
      <Image style={styles.imageIcon} source={item.icon} />
      <Text style={styles.text}>{item.title}</Text>
      {item.appVersion ? (
        <Text style={styles.textNext}>{item.appVersion}</Text>
      ) : (
        <Image style={styles.iconNext} source={ICONNEXT} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    marginVertical: 8,
  },
  imageIcon: {
    width: 20,
    height: 20,
    marginVertical: 20,
    marginHorizontal: 10,
    resizeMode: "contain",
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
  },
  iconNext: {
    position: "absolute",
    justifyContent: "flex-end",
    width: 20,
    height: 20,
    right: 10,
  },
  textNext: {
    position: "absolute",
    justifyContent: "flex-end",
    color: "#417AF9",
    right: 15,
  },
});

export default ProfileItem;
