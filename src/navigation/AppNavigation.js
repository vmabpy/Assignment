import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigation from "./HomeStackNavigation";
import DownloadStackNavigation from "./DownloadStackNavigation";
import BrowseStackNavigation from "./BrowseStackNavigation";
import SearchStackNavigation from "./SearchStackNavigation";
const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "HomeApp") {
            // iconName = focused ? "ios-home" : "ios-home-outline";
            iconName = "ios-home";
          } else if (route.name === "DownloadApp") {
            iconName = "ios-download";
          } else if (route.name === "BrowseApp") {
            iconName = "ios-browsers";
          } else if (route.name === "SearchApp") {
            iconName = "ios-search";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="HomeApp"
        component={HomeStackNavigation}
        options={{ title: "Home" }}
      />
      <Tab.Screen
        name="DownloadApp"
        component={DownloadStackNavigation}
        options={{ title: "Favorite" }}
      />
      <Tab.Screen
        name="BrowseApp"
        component={BrowseStackNavigation}
        options={{ title: "Browse" }}
      />
      <Tab.Screen
        name="SearchApp"
        component={SearchStackNavigation}
        options={{
          title: "Search",
        }}
      />
    </Tab.Navigator>
  );
};
export default AppNavigation;
