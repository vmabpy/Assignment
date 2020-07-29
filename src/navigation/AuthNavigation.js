import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Register } from "../components/Authentication/";
const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={Login}
        options={{ title: "Sign In", headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ title: "Register", headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
