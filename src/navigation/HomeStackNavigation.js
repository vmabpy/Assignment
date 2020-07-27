import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Home,
  CourseDetail,
  Profile,
  Categories,
  CoursesInCategory,
} from "../components/Main/Home";
const Stack = createStackNavigator();

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      // screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Categories} />
      <Stack.Screen name="Courses" component={CoursesInCategory} />
      <Stack.Screen name="CourseDetail" component={CourseDetail} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigation;
