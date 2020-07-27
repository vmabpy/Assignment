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
} from "../components/Main/Browse";
const Stack = createStackNavigator();
const BrowseStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Browse">
      <Stack.Screen name="Browse" component={Browse} />
      <Stack.Screen
        name="NewRealse"
        component={NewRealease}
        options={{ title: "New" }}
      />
      <Stack.Screen name="Recommendation" component={Recommendation} />
      <Stack.Screen
        name="CourseLanguageDetail"
        component={ListLanguageDetail}
      />
      <Stack.Screen name="PathDetail" component={LearningPathDetail} />
      <Stack.Screen name="AuthorDetail" component={ListAuthorDetail} />
      <Stack.Screen name="CourseDetail" component={CourseDetail} />
      <Stack.Screen name="RelatedCourses" component={RelatedCourses} />
    </Stack.Navigator>
  );
};

export default BrowseStackNavigation;
