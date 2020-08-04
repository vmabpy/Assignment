import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import SearchBar from "./SearchBar";
import { connect } from "react-redux";
import loGet from "lodash/get";
import CourseActions from "../../../redux/courseRedux";
import ListCoursesItem from "../../Courses/ListCoursesItem/list-courses-item";

const SearchCourse = (props) => {
  const onPressListItem = (item) => {
    props.navigation.navigate("CourseDetail", { item });
  };

  const dataSearch = props.searchResults;
  const { inputSearch } = props;

  const FlatListItemSeparator = () => {
    return <View style={styles.separator}></View>;
  };

  useEffect(() => {
    const params = { keyword: inputSearch, limit: 20, offset: 0 };
    props.search(params);
  });

  return (
    <View style={styles.container}>
      <SearchBar search={props.search} />
      <FlatList
        data={dataSearch}
        renderItem={({ item }) => (
          <ListCoursesItem
            navigation={props.navigation}
            item={item}
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
  container: {
    padding: 15,
    marginTop: Platform.OS == "ios" ? 20 : 0,
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#E7E8E8",
  },
});

const mapStateToProps = (state) => ({
  searchResults: loGet(state, ["course", "searchResults"], []),

  inputSearch: loGet(state, ["course", "inputSearch"], undefined),
});
const mapDispatchTopProps = (dispatch) => ({
  search: (params, actionSuccess) =>
    dispatch(CourseActions.searchCoursesRequest(params, actionSuccess)),
});
export default connect(mapStateToProps, mapDispatchTopProps)(SearchCourse);
