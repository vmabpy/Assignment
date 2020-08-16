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
  Setting,
  Language,
} from "../components/Main/Home";
import I18n from "ex-react-native-i18n";
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
        options={{ title: I18n.t("key_change_password") }}
      />
      <Stack.Screen
        name="UpdateInfoUser"
        component={UpdateInfoUser}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RelatedCourses"
        component={RelatedCourses}
        options={{ title: I18n.t("key_related_course") }}
      />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="Language" component={Language} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigation;
