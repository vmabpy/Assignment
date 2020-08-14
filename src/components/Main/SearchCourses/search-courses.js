import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import SearchBar from "./SearchBar";
import { connect } from "react-redux";
import loGet from "lodash/get";
import CourseActions from "../../../redux/courseRedux";
import ListCoursesItem from "../../Courses/ListCoursesItem/list-courses-item";
import { Ionicons } from "@expo/vector-icons";
import ListAuthorItem from "./ListAuthorItem";
import ItemRecentSearch from "./ItemRecentSearch";

const SearchCourse = (props) => {
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const limitItem = 3;
  const [dataSearch, setDataSearch] = useState({});
  const [dataWillShow, setDataWillShow] = useState([]);
  const [useFor, setUseFor] = useState(true);
  const {
    tokenSave,
    searchResults,
    recentSearch,
    rencentInSearch,
    deleteRecentSearch,
  } = props;

  console.log(recentSearch, "RECENTSEARCH");

  const onPressListItem = (item) => {
    props.navigation.navigate("CourseDetail", { item });
  };

  const onPressItemTutor = (item) => {
    props.navigation.navigate("AuthorDetail", { item });
  };

  const onPressDeleteItemSearch = (item) => {
    const params = { id: item.id };
    deleteRecentSearch(params, () => {
      rencentInSearch();
    });
  };

  const updateData = (data = {}) => {
    setDataSearch(data);
    setDataWillShow(data.data || []);
  };

  const { inputSearch } = props;
  const FlatListItemSeparator = () => {
    return <View style={styles.separator}></View>;
  };

  // const handleLoadMore = () => {
  //   if (dataSearch.total >= dataWillShow.length) {
  //     setPage(page + 1);
  //     setOffset((page - 1) * limitItem);
  //     const params = {
  //       token: tokenSave,
  //       keyword: inputSearch,
  //       limit: limitItem,
  //       offset: offset,
  //     };
  //     props.search(params, (res = {}) => {
  //       console.log(res);
  //       // setDataSearch((prevData) => {
  //       //   const newData = {
  //       //     courses: {
  //       //       data: [...prevData.courses.data, ...res.courses.data],
  //       //       totalInPage: res.totalInPage,
  //       //       total: res.total,
  //       //     },
  //       //     instructors: {
  //       //       data: [...prevData.instructors.data, ...res.instructors.data],
  //       //       totalInPage: res.totalInPage,
  //       //       total: res.total,
  //       //     },
  //       //   };
  //       setDataSearch((prevData) => {
  //         const newData = {
  //           courses: {
  //             data: [...prevData.courses.data, ...searchResults.courses.data],
  //             totalInPage: res.totalInPage,
  //             total: res.total,
  //           },
  //           instructors: {
  //             data: [
  //               ...prevData.instructors.data,
  //               ...searchResults.instructors.data,
  //             ],
  //             totalInPage: res.totalInPage,
  //             total: res.total,
  //           },
  //         };
  //         return newData;
  //       });
  //       if (useFor) {
  //         setDataWillShow((pre) => [
  //           ...pre,
  //           ...(searchResults.courses.data || []),
  //         ]);
  //       } else {
  //         setDataWillShow((pre) => [
  //           ...pre,
  //           ...(searchResults.instructors.data || []),
  //         ]);
  //       }
  //     });
  //   } else {
  //     setOffset(0);
  //     setPage(1);
  //   }
  // };

  useEffect(() => {}, [useFor, rencentInSearch]);
  return (
    <View style={styles.container}>
      <SearchBar
        useFor={useFor}
        search={props.search}
        limit={limitItem}
        offset={offset}
        updateData={updateData}
      />

      {inputSearch !== "" && inputSearch !== undefined ? (
        <View style={{ flex: 1 }}>
          <View style={styles.listBtn}>
            <TouchableOpacity
              style={
                useFor
                  ? { ...styles.button, backgroundColor: "white" }
                  : styles.button
              }
              onPress={() => {
                setUseFor(true);
              }}
            >
              <Text
                style={
                  useFor
                    ? { ...styles.titleBtn, color: "#417AF9" }
                    : styles.titleBtn
                }
              >
                Course
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                !useFor
                  ? { ...styles.button, backgroundColor: "white" }
                  : styles.button
              }
              onPress={() => {
                setUseFor(false);
              }}
            >
              <Text
                style={
                  !useFor
                    ? { ...styles.titleBtn, color: "#417AF9" }
                    : styles.titleBtn
                }
              >
                Author
              </Text>
            </TouchableOpacity>
          </View>
          {dataWillShow.length > 0 ? (
            <View style={{ flex: 1, backgroundColor: "white" }}>
              {useFor ? (
                <FlatList
                  data={dataWillShow}
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
                <FlatList
                  data={dataWillShow}
                  renderItem={({ item }) => (
                    <ListAuthorItem
                      navigation={props.navigation}
                      item={item}
                      onPressItemTutor={onPressItemTutor}
                    />
                  )}
                  keyExtractor={(item) => item.id}
                  ItemSeparatorComponent={FlatListItemSeparator}
                />
              )}
            </View>
          ) : (
            <View style={styles.noResult}>
              <Ionicons name="ios-search" size="50" color="gray" />
              <Text style={styles.text}>No results</Text>
              <Text style={{ fontSize: 14 }}>
                We could not find any results for that
              </Text>
            </View>
          )}
        </View>
      ) : (
        <View style={styles.viewEmpty}>
          <Text style={styles.titleRecent}>Recent searches</Text>
          <FlatList
            data={recentSearch}
            renderItem={({ item }) => (
              <ItemRecentSearch
                item={item}
                onPressDeleteItemSearch={onPressDeleteItemSearch}
              />
            )}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={FlatListItemSeparator}
          />
          {/* <Text>{recentSearch.length}</Text> */}
        </View>
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
  viewListButton: {
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0.5,
    paddingVertical: 10,
    borderRadius: 10,
  },
  titleBtn: {
    fontSize: 12,
    fontWeight: "bold",
  },
  listBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  viewEmpty: {
    flex: 1,
    marginLeft: 10,
  },
  titleRecent: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 10,
    paddingVertical: 10,
  },
});

const mapStateToProps = (state) => ({
  searchResults: loGet(state, ["course", "searchResults"], {}),
  inputSearch: loGet(state, ["course", "inputSearch"], undefined),
  tokenSave: loGet(state, ["user", "token"]),
  recentSearch: loGet(state, ["course", "recentSearch"], []),
});
const mapDispatchTopProps = (dispatch) => ({
  search: (params, actionSuccess) =>
    dispatch(CourseActions.searchCoursesRequest(params, actionSuccess)),
  rencentInSearch: (actionSuccess) =>
    dispatch(CourseActions.getRecentSearchRequest(actionSuccess)),
  deleteRecentSearch: (params, actionSuccess) =>
    dispatch(CourseActions.deleteSearchRequest(params, actionSuccess)),
});
export default connect(mapStateToProps, mapDispatchTopProps)(SearchCourse);
