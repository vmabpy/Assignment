import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { connect } from "react-redux";
import loGet from "lodash/get";
import UserActions from "../../../redux/userRedux";
import { Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const screenHeight = Math.round(Dimensions.get("window").height);

export const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const { register } = props;

  const handleRegister = () => {
    const params = {
      username: name,
      email: email,
      phone: phone,
      password: password,
    };
    register(params);
  };
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <View style={styles.viewBubble}></View>
      <View style={styles.viewBubbleYellow}></View>
      <TouchableOpacity
        style={styles.buttonBack}
        onPress={() => props.navigation.goBack()}
      >
        <Ionicons name="ios-arrow-round-back" size="32" color="#FFF" />
      </TouchableOpacity>
      <Text style={styles.greeting}>{`Hello\n Sign up to get started`}</Text>
      <View style={styles.form}>
        <View>
          <Text style={styles.inputTitle}>Name</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            onChangeText={(name) => setName(name)}
            value={name}
          />
        </View>
        <View style={{ marginTop: 32 }}>
          <Text style={styles.inputTitle}>Email</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            onChangeText={(email) => setEmail(email)}
            value={email}
          />
        </View>
        <View style={{ marginTop: 32 }}>
          <Text style={styles.inputTitle}>Phone</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            onChangeText={(phone) => setPhone(phone)}
            value={phone}
          />
        </View>
        <View style={{ marginTop: 32 }}>
          <Text style={styles.inputTitle}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(password) => setPassword(password)}
            value={password}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.textLogin}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.textSignUp}
        onPress={() => props.navigation.navigate("SignIn")}
      >
        <Text style={{ color: "#414959", fontSize: 13 }}>
          Having an account?{" "}
          <Text style={{ fontWeight: "500", color: "#E9446A" }}>Login</Text>
        </Text>
      </TouchableOpacity>
      <View style={styles.viewBubbleBottom}></View>
      <View style={styles.viewBubbleButtonLeft}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    marginTop: 8,
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
    marginTop: 30,
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
  register: (params, actionSuccess) =>
    dispatch(UserActions.registerRequest(params, actionSuccess)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Register);
