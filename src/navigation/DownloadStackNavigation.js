import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Favorite, CourseDetail } from "../components/Main/Favorite/index";
const Stack = createStackNavigator();

const DownloadStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Favorite">
      <Stack.Screen name="Favorite" component={Favorite} />
      <Stack.Screen name="CourseDetail" component={CourseDetail} />
    </Stack.Navigator>
  );
};

export default DownloadStackNavigation;
