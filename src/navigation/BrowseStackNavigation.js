import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Browse,
  NewRealease,
  Recommendation,
  ListLanguageDetail,
  LearningPathDetail,
  ListAuthorDetail,
  CourseDetail,
  RelatedCourses,
  RatingCourse,
} from "../components/Main/Browse";
import I18n from "ex-react-native-i18n";
const Stack = createStackNavigator();
const BrowseStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Browse">
      <Stack.Screen name="Browse" component={Browse} />
      <Stack.Screen
        name="NewRealse"
        component={NewRealease}
        options={{ title: I18n.t("key_new") }}
      />
      <Stack.Screen
        name="Recommendation"
        component={Recommendation}
        options={{ title: I18n.t("key_new") }}
      />
      <Stack.Screen
        name="CourseLanguageDetail"
        component={ListLanguageDetail}
      />
      <Stack.Screen name="PathDetail" component={LearningPathDetail} />
      <Stack.Screen name="AuthorDetail" component={ListAuthorDetail} />
      <Stack.Screen name="CourseDetail" component={CourseDetail} />
      <Stack.Screen
        name="RelatedCourses"
        component={RelatedCourses}
        options={{ title: I18n.t("key_related_course") }}
      />
      <Stack.Screen
        name="RatingCourse"
        component={RatingCourse}
        options={{ title: I18n.t("key_rating") }}
      />
    </Stack.Navigator>
  );
};

export default BrowseStackNavigation;
