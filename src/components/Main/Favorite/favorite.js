import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, RefreshControl } from "react-native";
import { connect } from "react-redux";
import loGet from "lodash/get";
import UserActions from "../../../redux/userRedux";
import ListCourseItemFavorite from "./ListCourseItemFavorite";

const Favorite = (props) => {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const onPressListItem = (item) => {
    props.navigation.navigate("CourseDetail", { item });
  };

  console.log(data);

  useEffect(() => {
    props.getFavorite((favorite) => {
      setData(favorite);
    });
  }, []);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    props.getFavorite((favorite) => {
      setData(favorite);
    });
    setRefreshing(false);
  }, [refreshing]);

  const handlePress = (item) => {
    props.navigation.navigate("Courses", { item });
  };

  const FlatListItemSeparator = () => {
    return <View style={styles.separator}></View>;
  };

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <ListCourseItemFavorite
          item={item}
          navigation={props.navigation}
          onPressListItem={onPressListItem}
        />
      )}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={FlatListItemSeparator}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 0.5,
    width: "100%",
    backgroundColor: "#E7E8E8",
  },
});

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  getFavorite: (actionSuccess) =>
    dispatch(UserActions.getFavoriteRequest(actionSuccess)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
