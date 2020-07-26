import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Download, CourseDetail } from "../components/Main/Download/index";
const Stack = createStackNavigator();

const DownloadStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Download">
      <Stack.Screen name="Download" component={Download} />
      <Stack.Screen name="CourseDetail" component={CourseDetail} />
    </Stack.Navigator>
  );
};

export default DownloadStackNavigation;
