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
      <Stack.Screen
        name="Home"
        component={Categories}
        options={{ title: I18n.t("key_home") }}
      />
      <Stack.Screen
        name="Courses"
        component={CoursesInCategory}
        options={{ title: I18n.t("key_courses") }}
      />
      <Stack.Screen name="CourseDetail" component={CourseDetail} />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ title: I18n.t("key_profile") }}
      />
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
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{ title: I18n.t("key_setting") }}
      />
      <Stack.Screen
        name="Language"
        component={Language}
        options={{ title: I18n.t("key_language_title") }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigation;
