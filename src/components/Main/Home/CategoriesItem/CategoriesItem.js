import React from "react";
import { View, TouchableHighlight, Image, StyleSheet } from "react-native";
import { takeLeading } from "redux-saga/effects";

const Categories = (props) => {
  const { thumbnail, title, handlePress } = props;
  return (
    <View style={categoryStyle.wrapper}>
      <TouchableHighlight style={categoryStyle.touchable} onPress={handlePress}>
        <View style={categoryStyle.contentWrapper}>
          <Image style={categoryStyle.thumbnail} source={thumbnail} />
          <Text style={categoryStyle.title}>{title.toUpperCase()}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const categoryStyle = StyleSheet.create({
  wrapper: {
    aspectRatio: 5 / 2,
    width: "100%",
    height: undefined,
    position: "relative",
    padding: 0,
  },
  touchable: {
    width: "100%",
    height: "100%",
  },
  contentWrapper: {
    width: "100%",
    height: "100%",
    position: "relative",
    justifyContent: "center",
  },
  title: {
    position: "absolute",
    alignSelf: "center",
    fontSize: 24,
    color: "white",
    letterSpacing: 3,
    fontWeight: "bold",
  },
  thumbnail: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    resizeMode: "contain",
  },
});

export default Categories;
