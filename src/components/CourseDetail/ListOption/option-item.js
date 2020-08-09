import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const OptionItem = (props) => {
  const { optionItem } = props;
  return (
    <TouchableOpacity
      style={styles.conatiner}
      onPress={() => {
        props.handleOption(optionItem);
      }}
    >
      <View style={styles.viewIcon}>
        <Image source={optionItem.imageRoute} style={styles.image} />
      </View>
      <Text style={styles.titleIcon}>{optionItem.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    alignItems: "center",
    width: 95,
    marginVertical: 12,
  },
  viewIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "darkgray",
    resizeMode: "contain",
  },
  image: {
    width: 24,
    height: 24,
  },
  titleIcon: {
    color: "#888",
    fontSize: 12,
    fontWeight: "600",
    marginTop: 6,
    textAlign: "center",
  },
});

export default OptionItem;
