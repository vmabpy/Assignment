import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  CourseDetail,
  Profile,
  Categories,
  CoursesInCategory,
  RelatedCourses,
  Changepassword,
  UpdateInfoUser,
} from "../components/Main/Home";
const Stack = createStackNavigator();

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Categories} />
      <Stack.Screen name="Courses" component={CoursesInCategory} />
      <Stack.Screen name="CourseDetail" component={CourseDetail} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen
        name="Changepassword"
        component={Changepassword}
        options={{ title: "Change password" }}
      />
      <Stack.Screen
        name="UpdateInfoUser"
        component={UpdateInfoUser}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RelatedCourses"
        component={RelatedCourses}
        options={{ title: "Related Courses" }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigation;
