import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  SearchCourse,
  CourseDetail,
  RelatedCourses,
  ListAuthorDetail,
} from "../components/Main/SearchCourses";
const Stack = createStackNavigator();

const SearchStackNavigation = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchCourse}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="CourseDetail" component={CourseDetail} />
      <Stack.Screen
        name="RelatedCourses"
        component={RelatedCourses}
        options={{ title: "Related Courses" }}
      />
      <Stack.Screen name="AuthorDetail" component={ListAuthorDetail} />
    </Stack.Navigator>
  );
};
export default SearchStackNavigation;
