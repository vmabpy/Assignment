import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import moment from "moment";
import { ICONPROFILE } from "../../../config/icon";

const CommentItem = (props) => {
  const { item } = props;
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={
          item.user.avatar.includes("https")
            ? { uri: item.user.avatar }
            : ICONPROFILE
        }
      />
      <View style={styles.content}>
        <Text style={styles.name}>{item.user.name}</Text>
        <View style={styles.detail}>
          <Text style={styles.message}>{item.content}</Text>
        </View>
        <Text style={styles.date}>
          {moment(item.updatedAt).format("DD/MM/YYYY")}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    borderRadius: 8,
    padding: 7,
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 5,
    borderRadius: 40,
    backgroundColor: "blue",
    alignSelf: "flex-start",
    marginTop: 10,
  },
  content: {
    padding: 5,
    flex: 1,
    justifyContent: "space-around",
  },
  name: {
    fontSize: 16,
  },
  detail: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  message: {
    flex: 1,
    fontSize: 12,
    alignItems: "flex-start",
  },
  date: {
    fontSize: 10,
    fontStyle: "italic",
    color: "#979797",
    alignSelf: "flex-end",
  },
});

export default CommentItem;
