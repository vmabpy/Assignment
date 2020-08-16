import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import * as Google from "expo-google-app-auth";
import { Dimensions } from "react-native";
import { connect } from "react-redux";
import loGet from "lodash/get";
import UserActions from "../../../redux/userRedux";
import { ICONGG } from "../../../config/icon";
import I18n from "ex-react-native-i18n";
const screenHeight = Math.round(Dimensions.get("window").height);

const IOS_CLIENT_ID =
  "124182005930-5ornmd19glhm7r4lqm662u9hi4bit65j.apps.googleusercontent.com";
const ANDROID_CLIENT_ID = "your-android-client-id";

const Login = (props) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { login, loginGoogle } = props;

  const handleLogin = () => {
    const params = {
      email: username,
      password: password,
    };
    login(params, () => {});
  };

  const handleLoginGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        iosClientId: IOS_CLIENT_ID,
        // androidClientId: ANDROID_CLIENT_ID,
        scopes: ["profile", "email", "openid"],
      });

      if (result.type === "success") {
        const paramsUser = {
          email: result.user.email,
          id: result.user.id,
        };
        const _params = {
          user: paramsUser,
        };
        loginGoogle(_params, () => {});
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log("Error with login", e);
      return { error: true };
    }
  };
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <View style={styles.viewBubble}></View>
      <View style={styles.viewBubbleYellow}></View>
      <Text style={styles.greeting}>{I18n.t("key_intro_login")}</Text>
      <View style={styles.form}>
        <View>
          <Text style={styles.inputTitle}>{I18n.t("key_email")}</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            onChangeText={(text) => setUserName(text)}
            defaultValue={username}
          />
        </View>
        <View style={{ marginTop: 32 }}>
          <Text style={styles.inputTitle}>{I18n.t("key_password")}</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}
            defaultValue={password}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.textLogin}>{I18n.t("key_signin")}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonGoogle} onPress={handleLoginGoogle}>
        <Image source={ICONGG} style={styles.iconGoogle} />
        <Text style={styles.textLoginGoogle}>{I18n.t("key_login_google")}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.textSignUp}
        onPress={() => props.navigation.push("Register")}
      >
        <Text style={{ color: "#414959", fontSize: 13 }}>
          {I18n.t("key_new_to_app")}{" "}
          <Text
            style={{
              fontWeight: "500",
              color: "#E9446A",
            }}
          >
            {I18n.t("key_sign_up")}
          </Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.textForgotPassword}
        onPress={() => props.navigation.push("ForgotPassword")}
      >
        <Text
          style={{
            fontWeight: "500",
            color: "#E9446A",
          }}
        >
          {I18n.t("key_forgor_password")}
        </Text>
      </TouchableOpacity>
    </View>
  );
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
  buttonText: {
    textAlign: "center",
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
    marginVertical: 5,
    marginHorizontal: 30,
    backgroundColor: "#E9446A",
    borderRadius: 4,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonGoogle: {
    flexDirection: "row",
    marginVertical: 5,
    marginHorizontal: 30,
    backgroundColor: "white",
    borderRadius: 4,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
  iconGoogle: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  textLogin: {
    color: "#fff",
    fontWeight: "500",
  },
  textLoginGoogle: {
    textAlign: "center",
    fontSize: 14,
  },
  textSignUp: {
    alignSelf: "center",
    marginTop: 32,
  },
  textForgotPassword: {
    alignSelf: "center",
    marginTop: 10,
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
  loginGoogle: (params, actionSuccess) =>
    dispatch(UserActions.loginGoogleRequest(params, actionSuccess)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
