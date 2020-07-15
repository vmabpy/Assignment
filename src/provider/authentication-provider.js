import React, { useState, useReducer } from "react";
import { View } from "react-native";
import { reducer } from "../reducer/authentication-reducer";
import { login } from "../action/authentication-action";
const AuthenticationContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  isAuthenticating: false,
  useInfo: null,
  token: null,
};

const AuthenticationProvider = (props) => {
  // const [authentication, setAuthentication] = useState()
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthenticationContext.Provider
      value={{ state, login: login(dispatch) /*, register: register*/ }}
    >
      {props.children}
    </AuthenticationContext.Provider>
  );
};

export { AuthenticationProvider, AuthenticationContext };
