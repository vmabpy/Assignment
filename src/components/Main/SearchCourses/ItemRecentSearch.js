import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { ICONCLOSE } from "../../../config/icon";

const ItemRecentSearch = (props) => {
  const { item } = props;
  return (
    <View style={styles.container}>
      <Text>{item.content}</Text>
      <TouchableOpacity
        style={styles.image}
        onPress={() => {
          props.onPressDeleteItemSearch(props.item);
        }}
      >
        <Image source={ICONCLOSE} />
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
  },
  image: {
    height: 20,
    width: 20,
  },
});

export default ItemRecentSearch;
