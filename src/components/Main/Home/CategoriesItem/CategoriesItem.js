import React from "react";
import {
  View,
  TouchableHighlight,
  Image,
  StyleSheet,
  Text,
} from "react-native";

const CategoriesItem = (props) => {
  const { title, handlePress } = props;
  return (
    <View style={categoryStyle.wrapper}>
      <TouchableHighlight style={categoryStyle.touchable} onPress={handlePress}>
        <View style={categoryStyle.contentWrapper}>
          <Text style={categoryStyle.title}>{title}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const categoryStyle = StyleSheet.create({
  wrapper: {
    margin: 20,
    height: 100,
    width: "auto",
    borderRadius: 50,
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
    backgroundColor: "#FFAC84",
  },
  title: {
    position: "absolute",
    alignSelf: "center",
    fontSize: 16,
    color: "white",
    letterSpacing: 3,
    fontWeight: "bold",
  },
});

export default CategoriesItem;
