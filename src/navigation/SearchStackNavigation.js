import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SearchCourse, CourseDetail } from "../components/Main/SearchCourses";
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
    </Stack.Navigator>
  );
};
export default SearchStackNavigation;
