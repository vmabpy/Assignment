// import React, { useState } from "react";
// import {
//   Text,
//   View,
//   StyleSheet,
//   FlatList,
//   ActivityIndicator,
//   Platform,
// } from "react-native";
// import { SearchBar } from "react-native-elements";
// import { searchCourses } from "../../../globals/courses";
// import ListCoursesItem from "../../Courses/ListCoursesItem/list-courses-item";

// const SearchCourse = (props) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [search, setSearch] = useState("");
//   const [arrayholder, setArrayHolder] = useState(searchCourses);
//   const [dataSource, setDataSource] = useState([]);

//   const onPressListItem = (item) => {
//     props.navigation.navigate("CourseDetail", { item });
//   };

//   const FlatListItemSeparator = () => {
//     return <View style={styles.separator}></View>;
//   };

//   const searchFilter = (text) => {
//     const newData = arrayholder.filter(function (item) {
//       const itemData = item.title ? item.title.toUpperCase() : "".toUpperCase();
//       const textData = text.toUpperCase();
//       return itemData.indexOf(textData) > -1;
//     });

//     setDataSource(newData);
//     setSearch(text);
//   };

//   if (isLoading) {
//     return (
//       <View style={{ flex: 1, paddingTop: 20 }}>
//         <ActivityIndicator />
//       </View>
//     );
//   }
//   return (
//     <View style={styles.viewStyle}>
//       <SearchBar
//         round
//         lightTheme
//         searchIcon={{ size: 24 }}
//         onChangeText={(text) => searchFilter(text)}
//         onClear={(text) => searchFilter("")}
//         placeholder="Type Here..."
//         value={search}
//       />
//       <FlatList
//         data={dataSource}
//         renderItem={({ item }) => (
//           <ListCoursesItem
//             item={item}
//             navigation={props.navigation}
//             onPressListItem={onPressListItem}
//           />
//         )}
//         ItemSeparatorComponent={FlatListItemSeparator}
//         enableEmptySections={true}
//         style={{ marginTop: 10 }}
//         keyExtractor={(item, index) => index.toString()}
//       />
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   viewStyle: {
//     justifyContent: "center",
//     flex: 1,
//     backgroundColor: "white",
//     marginTop: Platform.OS == "ios" ? 50 : 0,
//   },
//   textStyle: {
//     padding: 10,
//   },
//   separator: {
//     height: 0.5,
//     width: "100%",
//     backgroundColor: "gray",
//   },
// });
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
