import React, { useState, useEffect } from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";
import AppActions from "../redux/appRedux";

import AppNavigation from "./AppNavigation";
import AuthNavigation from "./AuthNavigation";
import SplashScreen from "../components/Authentication/Splash/splash";
const Stack = createStackNavigator();

const MainStackNavigator = (props) => {
  const [logedIn, setLogedIn] = useState(undefined);

  useEffect(() => {
    setLogedIn(props.hasLogedInYet);
  }, [props.hasLogedInYet]);

  return logedIn === undefined ? (
    <SplashScreen />
  ) : (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="authenticate"
        screenOptions={{
          headerShown: false,
        }}
      >
        {logedIn === false && (
          <Stack.Screen name="authenticate" component={AuthNavigation} />
        )}
        {logedIn === true && (
          <>
            <Stack.Screen name="mainApp" component={AppNavigation} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => ({
  hasLogedInYet: state.app.logedIn,
});
const mapDispatchToProps = (dispatch) => ({
  startUp: (actionSuccess, actionFalure) =>
    dispatch(AppActions.startupRequest(actionSuccess, actionFalure)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MainStackNavigator);
