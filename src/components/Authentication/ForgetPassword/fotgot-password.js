import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { connect } from "react-redux";
import loGet from "lodash/get";
import UserActions from "../../../redux/userRedux";
import { Ionicons } from "@expo/vector-icons";
const screenHeight = Math.round(Dimensions.get("window").height);
import I18n from "ex-react-native-i18n";

const ForgotPassword = (props) => {
  const [email, setEmail] = useState("");

  const { resetPassword } = props;
  const handleResetPassword = () => {
    const params = {
      email: email,
    };
    resetPassword(params);
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
      <Text style={styles.greeting}>{I18n.t("key_forgor_password")}</Text>
      <Text style={styles.intruction}>{I18n.t("key_intructor_forgot")}</Text>
      <View style={styles.form}>
        <View style={{ marginTop: 32 }}>
          <Text style={styles.inputTitle}>{I18n.t("key_email")}</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            onChangeText={(email) => setEmail(email)}
            value={email}
            placeholder={I18n.t("key_type_email")}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.textLogin}>Send</Text>
      </TouchableOpacity>
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
  intruction: {
    marginTop: 10,
    fontSize: 12,
    textAlign: "center",
    marginHorizontal: 20,
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
    fontSize: 12,
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
  resetPassword: (params, actionSuccess) =>
    dispatch(UserActions.forgotPasswordRequest(params, actionSuccess)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
