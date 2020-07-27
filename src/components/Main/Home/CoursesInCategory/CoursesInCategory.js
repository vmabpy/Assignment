import React, { useEffect, useState, useReducer } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import CourseActions from "../../../../redux/courseRedux";
import { connect } from "react-redux";
import loGet from "lodash/get";
import ListCoursesItem from "../../../Courses/ListCoursesItem/list-courses-item";

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

const CoursesInCategory = (props) => {
  const {
    route: { params },
    getCoursesInCategory,
  } = props;
  const category = params ? params.item : undefined;
  const [data, setData] = useState([]);

  useEffect(() => {
    const categoryId = category ? category.id : undefined;
    if (categoryId) {
      var arrayId = [categoryId];
      var stringEmpty = "";
      const _params = {
        keyword: stringEmpty,
        opt: {
          category: arrayId,
        },
        limit: 12,
        offset: 0,
      };
      getCoursesInCategory(_params, (res) => {
        setData(res.payload.rows);
      });
    }
  }, [category, getCoursesInCategory]);

  const onPressListItem = (item) => {
    props.navigation.navigate("CourseDetail", { item });
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ListCoursesItem
            navigation={props.navigation}
            item={item}
            onPressListItem={onPressListItem}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchTopProps = (dispatch) => ({
  getCoursesInCategory: (params, actionSuccess) =>
    dispatch(CourseActions.getCoursesRequest(params, actionSuccess)),
});
export default connect(mapStateToProps, mapDispatchTopProps)(CoursesInCategory);
