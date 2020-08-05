import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import RecommendItem from "./recommendItem";

const Recommendation = (props) => {
  const {
    route: { params },
  } = props;
  let recommendData = params
    ? params.recommendData.filter((item) => item.status === "COMPLETED")
    : [];

  const onPressListItem = (item) => {
    props.navigation.navigate("CourseDetail", { item });
  };
  const FlatListItemSeparator = () => {
    return <View style={styles.separator}></View>;
  };

  console.log(recommendData, "DATA");

  return (
    <View>
      <FlatList
        data={recommendData}
        renderItem={({ item }) => (
          <RecommendItem
            item={item}
            navigation={props.navigation}
            onPressListItem={onPressListItem}
          />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={FlatListItemSeparator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 0.5,
    width: "100%",
    backgroundColor: "gray",
  },
});

export default Recommendation;
