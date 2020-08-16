import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Register, ForgotPassword } from "../components/Authentication/";
const Stack = createStackNavigator();
import I18n from "ex-react-native-i18n";

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={Login}
        options={{ title: I18n.t("key_signin"), headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ title: I18n.t("key_register"), headerShown: false }}
      />

      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
