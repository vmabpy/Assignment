import React, { useEffect, useState, useReducer } from "react";
import {
  View,
  FlatList,
  TextInput,
  Button,
  StyleSheet,
  SectionList,
  Text,
  ActivityIndicator,
} from "react-native";
import ListCoursesItem from "../ListCoursesItem/list-courses-item";
import { render } from "react-dom";
import { ThemeContext, themes } from "../../../../src/provider/theme-provider";
const Data = [
  {
    id: "9f3d46fa-61d2-4d4c-a392-a8e79ca7f335",
    title: "Lập trình giao diện web cơ bản",
    subtitle: "Tìm hiểu cú pháp html, css. Dựng giao diện web",
    price: 0,
    description: "Tìm hiểu cú pháp html, css. Dựng giao diện web",
    requirement: [],
    learnWhat: ["Lập trình giao diện web cơ bản"],
    soldNumber: 6,
    ratedNumber: 0,
    videoNumber: 1,
    totalHours: 0.08,
    formalityPoint: 0,
    contentPoint: 0,
    presentationPoint: 0,
    imageUrl:
      "https://storage.googleapis.com/itedu-bucket/Courses/9f3d46fa-61d2-4d4c-a392-a8e79ca7f335/avatar/67a2008d-7f04-4240-bbfc-1182c4f052af.jpg",
    promoVidUrl: null,
    status: "COMPLETED",
    isHidden: false,
    isDeleted: false,
    createdAt: "2020-07-05T14:03:52.290Z",
    updatedAt: "2020-07-08T08:12:07.629Z",
    instructorId: "3ad3dc06-824c-4c0b-a90d-d7cccdf80d88",
    typeUploadVideoLesson: 1,
    "instructor.user.id": "1133fd7c-35da-4479-b197-2106f2f141b1",
    "instructor.user.name": "Lê Uyển Nhi",
  },
];

/*
{
  type: "ACTION",
  data: Object,
}

*/

const initialState = { data: Data, isLoading: true, isError: false };

function reducer(state, action) {
  switch (action.type) {
    case "REQUEST_LIST_COURSES_SUCCESSED":
      return { ...state, data: action.data, isLoading: false };
    default:
      throw new Error();
  }
}

const ListCourses = (props) => {
  // const [isLoading, setLoading] = useState(true);
  // const [data, setData] = useState(Data);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // setLoading(true);
    //networking request
    fetch("https://api.itedu.me/course/top-sell", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        page: 1,
        limit: 10,
      }),
    })
      .then((response) => response.json())
      .then((json) =>
        dispatch({ type: "REQUEST_LIST_COURSES_SUCCESSED", data: json.payload })
      )
      .catch((error) => {})
      .finally(() => {});
  }, []);

  const searchView = () => {
    return (
      <View style={{ flexDirection: "row" }}>
        <TextInput
          style={styles.textinput}
          placeholder="search Text"
        ></TextInput>
        <Button
          onPress={() => {
            console.log("Search");
          }}
          title="Search"
          style={styles.button}
        />
      </View>
    );
  };

  const renderSearchView = () => {};

  const onPressListItem = (item) => {
    props.navigation.navigate("CourseDetail", { item });
  };

  return (
    // <View>
    //     <FlatList
    //       data = {courses}
    //       renderItem = {({item}) => <ListCoursesItem item = {item} />}
    //       ListHeaderComponent = {() => searchView()}
    //     />
    // </View>

    // <ThemeContext.Consumer>
    //     {
    //         ({ theme, setTheme }) => {
    // return (
    <View style={{ flex: 1 }}>
      {state.isLoading && <ActivityIndicator size="large" color="red" />}
      <FlatList
        data={state.data}
        renderItem={({ item }) => (
          <ListCoursesItem
            navigation={props.navigation}
            item={item}
            onPressListItem={onPressListItem}
          />
        )}
        ListHeaderComponent={() => searchView()}
      />
      {/* <SectionList
                style={{ backgroundColor: themes.background }}
                sections={courseSection}
                renderItem={({ item }) => <ListCoursesItem navigation={props.navigation} item={item} onPressListItem={onPressListItem} />}
                renderSectionHeader={({ section: { title } }) => (
                    <View style={{ backgroundColor: 'white' }}>
                        <Text>{title}</Text>
                    </View>
                )}
            /> */}
      {/* <Button
                title="Change Themes"
                onPress={() => {
                    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
                }}
            /> */}
    </View>
  );
  //         }
  //     }
  // </ThemeContext.Consumer>

  // )
};

const styles = StyleSheet.create({
  textinput: {
    flex: 1,
    borderColor: "gray",
    borderWidth: 1,
    margin: 5,
  },
  button: {
    height: 40,
    width: 40,
  },
});

export default ListCourses;
