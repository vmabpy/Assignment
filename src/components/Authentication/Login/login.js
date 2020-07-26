import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Dimensions } from "react-native";
import { connect } from "react-redux";
import loGet from "lodash/get";
import UserActions from "../../../redux/userRedux";
import { login } from "../../../core/service/authenticate-service";
import { render } from "react-dom";
import Profile from "../../../AccountManagement/Account/profile";
import { AuthenticationContext } from "../../../provider/authentication-provider";
const screenHeight = Math.round(Dimensions.get("window").height);

const Login = (props) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = props;

  const handleLogin = () => {
    const params = {
      email: username,
      password: password,
    };
    login(params, () => {});
  };
  // const [status, setStatus] = useState(null)
  // const authContext = useContext(AuthenticationContext);

  // const renderLoginStatus = (status) => {
  //   if (!status) {
  //     return <View />;
  //   } else if (status.status === 200) {
  //     return <View />;
  //   } else {
  //     return <Text style={{ alignSelf: "center" }}>{status.errorString}</Text>;
  //   }
  // };

  // useEffect(() => {
  //   if (authContext.state.isAuthenticated) {
  //     props.navigation.navigate("MainApp", {
  //       screen: "HomeApp",
  //       params: {
  //         screen: "Home",
  //         params: authContext.state.userInfo,
  //       },
  //     });
  //   }
  // }, [authContext.state.isAuthenticated]);

  // if (authContext.state.isAuthenticating) {
  //   return <ActivityIndicator size="small" color="#0000ff" />;
  // }

  //   return (
  //     <AuthenticationContext.Consumer>
  //       {({ setAuthentication }) => {
  return (
    // <ThemeContext.Consumer>
    //     {
    //         ({ theme, setTheme }) => {
    //             return (
    // <View style={{ ...styles.containerLogin , backgroundColor: theme.background }}>
    // <View style={{ ...styles.containerLogin }}>
    <View>
      <StatusBar barStyle="light-content" />
      <View style={styles.viewBubble}></View>
      <View style={styles.viewBubbleYellow}></View>
      <Text style={styles.greeting}>{`Hello again\n Welcome back`}</Text>
      <View style={styles.form}>
        <View>
          <Text style={styles.inputTitle}>Email</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            onChangeText={(text) => setUserName(text)}
            defaultValue={username}
          />
        </View>
        <View style={{ marginTop: 32 }}>
          <Text style={styles.inputTitle}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}
            defaultValue={password}
          />
        </View>
      </View>
      {/* {renderLoginStatus(authContext.state.isAuthenticated)} */}
      <TouchableOpacity
        style={styles.button}
        // onPress={() => {
        //   setStatus(login(userName, password));
        //   setAuthentication(login(userName, password));
        // authContext.login(username, password);
        // }}
        onPress={handleLogin}
      >
        <Text style={styles.textLogin}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.textSignUp}
        onPress={() => props.navigation.push("Register")}
      >
        <Text style={{ color: "#414959", fontSize: 13 }}>
          New to App?{" "}
          <Text style={{ fontWeight: "500", color: "#E9446A" }}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
    //             )
    //         }
    //     }
    // </ThemeContext.Consumer >
  );
  //       }}
  //     </AuthenticationContext.Consumer>
  //   );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  logo: {
    width: 150,
    height: 150,
  },
  textinput: {
    height: 40,
    marginTop: 20,
    textAlign: "center",
    width: "98%",
    borderColor: "gray",
    borderWidth: 1,
  },
  button: {
    height: 40,
    marginTop: 20,
    width: "98%",
    backgroundColor: "red",
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  containerLogin: {
    flex: 1,
  },
  greeting: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
  },
  form: {
    marginTop: 72,
    marginBottom: 48,
    marginHorizontal: 30,
  },
  inputTitle: {
    color: "#8A8F9E",
    fontSize: 10,
    textTransform: "uppercase",
  },
  input: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#161F3D",
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: "#E9446A",
    borderRadius: 4,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
  textLogin: {
    color: "#fff",
    fontWeight: "500",
  },
  textSignUp: {
    alignSelf: "center",
    marginTop: 32,
  },
  error: {
    color: "#E9446A",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
  },
  viewBubble: {
    backgroundColor: "#FCE3EB",
    height: 0.5 * screenHeight,
    width: 0.5 * screenHeight,
    marginLeft: "40%",
    marginTop: -176,
    borderRadius: 0.25 * screenHeight,
  },
  viewBubbleYellow: {
    position: "absolute",
    marginTop: -120,
    marginLeft: -50,
    height: 0.3 * screenHeight,
    width: 0.3 * screenHeight,
    borderRadius: 0.15 * screenHeight,
    backgroundColor: "#F9B97A",
  },
  viewBubbleBottom: {
    backgroundColor: "#FCE3EB",
    height: 0.3 * screenHeight,
    width: 0.3 * screenHeight,
    borderRadius: 0.15 * screenHeight,
    right: -300,
  },
  viewBubbleButtonLeft: {
    position: "absolute",
    height: 0.2 * screenHeight,
    width: 0.2 * screenHeight,
    borderRadius: 0.1 * screenHeight,
    backgroundColor: "#FEEBE4",
    right: -5,
    bottom: -120,
  },
  buttonBack: {
    position: "absolute",
    top: 48,
    left: 32,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(21,22,48,0.1)",
    alignItems: "center",
    justifyContent: "center",
  },
});

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  login: (params, actionSuccess) =>
    dispatch(UserActions.loginRequest(params, actionSuccess)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
