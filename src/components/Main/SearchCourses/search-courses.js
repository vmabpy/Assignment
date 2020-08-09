import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, View, FlatList, RefreshControl, Text } from "react-native";
import SearchBar from "./SearchBar";
import { connect } from "react-redux";
import loGet from "lodash/get";
import CourseActions from "../../../redux/courseRedux";
import ListCoursesItem from "../../Courses/ListCoursesItem/list-courses-item";
import { Ionicons } from "@expo/vector-icons";

const SearchCourse = (props) => {
  const [reload, setReload] = useState(false);
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [limitItem, setLimitItem] = useState(10);
  const [dataSearch, setDataSearch] = useState([]);

  const onPressListItem = (item) => {
    props.navigation.navigate("CourseDetail", { item });
  };

  const updateData = (data) => {
    setDataSearch(data.payload.rows);
  };

  const { inputSearch } = props;
  const FlatListItemSeparator = () => {
    return <View style={styles.separator}></View>;
  };

  useEffect(() => {}, [dataSearch]);

  const handleLoadMore = () => {
    setPage(page + 1);
    setOffset((page - 1) * limitItem);
    const params = {
      keyword: inputSearch,
      limit: limitItem,
      offset: offset,
    };
    props.search(params, (res) => {
      setDataSearch([...dataSearch, ...res]);
    });
  };

  return (
    <View style={styles.container}>
      <SearchBar
        search={props.search}
        limit={limitItem}
        offset={props.offset}
        updateData={updateData}
      />

      {inputSearch !== "" ? (
        <View style={{ flex: 1 }}>
          {dataSearch.length > 0 ? (
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
          ) : (
            <View style={styles.noResult}>
              <Ionicons name="ios-search" size="50" color="gray" />
              <Text style={styles.text}>No results</Text>
              <Text style={{ fontSize: 14 }}>
                We could not find any courses for that
              </Text>
            </View>
          )}
        </View>
      ) : (
        <Text>Hello</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 5,
    marginTop: Platform.OS == "ios" ? 30 : 0,
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#E7E8E8",
  },
  noResult: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
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
