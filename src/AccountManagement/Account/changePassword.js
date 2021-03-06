import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import loGet from "lodash/get";
import UserActions from "../../redux/userRedux";
import { dimension } from "../../globals/dimension";
import I18n from "ex-react-native-i18n";

const Changepassword = (props) => {
  const { userInfo = {}, changePassword } = props;

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = () => {
    const params = {
      id: userInfo.id,
      oldPass: oldPassword,
      newPass: newPassword,
    };
    changePassword(params);
  };
  return (
    <ScrollView>
      <StatusBar barStyle="light-content" />
      <View style={styles.form}>
        <View style={{ marginTop: 32 }}>
          <Text style={styles.inputTitle}>{I18n.t("key_old_password")}</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            secureTextEntry
            onChangeText={(oldPassword) => setOldPassword(oldPassword)}
            value={oldPassword}
          />
        </View>
        <View style={{ marginTop: 32 }}>
          <Text style={styles.inputTitle}>{I18n.t("key_new_password")}</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            secureTextEntry
            onChangeText={(newPassword) => setNewPassword(newPassword)}
            value={newPassword}
          />
        </View>
        <View style={{ marginTop: 32 }}>
          <Text style={styles.inputTitle}>{I18n.t("key_confirm")}</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            secureTextEntry
            onChangeText={(confirmPassword) =>
              setConfirmPassword(confirmPassword)
            }
            value={confirmPassword}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
          <Text style={styles.textLogin}>{I18n.t("key_change_password")}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    margin: 30,
    marginHorizontal: 30,
  },
  inputTitle: {
    color: "#417AF9",
    fontSize: 16,
  },
  input: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#161F3D",
  },
  button: {
    marginTop: 30,
    marginVertical: 30,
    backgroundColor: "#417AF9",
    borderRadius: 4,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
  textLogin: {
    color: "#fff",
    fontWeight: "500",
  },
});

const mapStateToProps = (state) => ({
  userInfo: loGet(state, ["user", "userInfo"], {}),
});

const mapDispatchToProps = (dispatch) => ({
  changePassword: (params, actionSuccess) =>
    dispatch(UserActions.changePasswordRequest(params, actionSuccess)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Changepassword);
