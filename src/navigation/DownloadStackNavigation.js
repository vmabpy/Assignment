import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Favorite,
  CourseDetail,
  RelatedCourses,
} from "../components/Main/Favorite/index";
const Stack = createStackNavigator();
import I18n from "ex-react-native-i18n";

const DownloadStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Favorite">
      <Stack.Screen name="Favorite" component={Favorite} />
      <Stack.Screen name="CourseDetail" component={CourseDetail} />
      <Stack.Screen
        name="RelatedCourses"
        component={RelatedCourses}
        options={{ title: I18n.t("key_related_course") }}
      />
    </Stack.Navigator>
  );
};

export default DownloadStackNavigation;
