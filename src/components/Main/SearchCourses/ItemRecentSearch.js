import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { ICONCLOSE } from "../../../config/icon";

const ItemRecentSearch = (props) => {
  const { item } = props;
  return (
    <View style={styles.container}>
      <Text>{item.content}</Text>
      <TouchableOpacity
        style={{ marginRight: 10 }}
        onPress={() => {
          props.onPressDeleteItemSearch(props.item);
        }}
      >
        <Image style={styles.image} source={ICONCLOSE} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  image: {
    height: 10,
    width: 10,
  },
});

export default ItemRecentSearch;
