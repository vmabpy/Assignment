import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigation from "./HomeStackNavigation";
import DownloadStackNavigation from "./DownloadStackNavigation";
import BrowseStackNavigation from "./BrowseStackNavigation";
import SearchStackNavigation from "./SearchStackNavigation";
const Tab = createBottomTabNavigator();
import I18n from "ex-react-native-i18n";

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
            iconName = "ios-bookmark";
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
        options={{ title: I18n.t("key_home") }}
      />
      <Tab.Screen
        name="DownloadApp"
        component={DownloadStackNavigation}
        options={{ title: I18n.t("key_favorite") }}
      />
      <Tab.Screen
        name="BrowseApp"
        component={BrowseStackNavigation}
        options={{ title: I18n.t("key_browse") }}
      />
      <Tab.Screen
        name="SearchApp"
        component={SearchStackNavigation}
        options={{
          title: I18n.t("key_search"),
        }}
      />
    </Tab.Navigator>
  );
};
export default AppNavigation;
