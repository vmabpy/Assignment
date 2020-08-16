import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { connect } from "react-redux";
import loGet from "lodash/get";
import UserActions from "../../redux/userRedux";
import { ICONPROFILE } from "../../config/icon";
import I18n from "ex-react-native-i18n";

const UpdateInfoUser = (props) => {
  const { params = { user: {} } } = props.route;
  const { user } = params;
  const [newName, setNewName] = useState(user.name);
  const [newPhone, setNewPhone] = useState(user.phone);
  const { updateInfo } = props;

  const handleUpdate = () => {
    const params = {
      name: newName,
      phone: newPhone,
    };
    updateInfo(params, () => {
      props.navigation.navigate("Profile");
    });
  };
  return (
    <ScrollView>
      <View style={styles.contain}>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => props.navigation.goBack()}
        >
          <Ionicons name="ios-arrow-round-back" size={32} color="#FFF" />
        </TouchableOpacity>
        <View style={styles.viewProfile}>
          <Image style={styles.image} source={{ uri: user.avatar }} />
        </View>
        <View style={styles.form}>
          <View style={{ marginTop: 32 }}>
            <Text style={styles.inputTitle}>{I18n.t("key_fullName")}</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={(newName) => setNewName(newName)}
              value={newName}
              placeholder={newName}
            />
          </View>
          <View style={{ marginTop: 32 }}>
            <Text style={styles.inputTitle}>{I18n.t("key_phone")}</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={(newPhone) => setNewPhone(newPhone)}
              value={newPhone}
              placeholder={newPhone}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleUpdate}>
            <Text style={styles.textLogin}>{I18n.t("key_update")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  form: {
    margin: 30,
    marginHorizontal: 30,
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
  inputTitle: {
    color: "#417AF9",
    fontSize: 16,
  },
  buttonBack: {
    marginTop: Constants.statusBarHeight,
    width: 32,
    height: 32,
    marginLeft: 25,
    borderRadius: 16,
    backgroundColor: "rgba(21,22,48,0.1)",
    alignItems: "center",
    justifyContent: "center",
  },
  viewProfile: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  image: {
    height: 130,
    width: 130,
    borderRadius: 65,
    resizeMode: "cover",
  },
});

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  updateInfo: (params, actionSuccess) =>
    dispatch(UserActions.updateInfoRequest(params, actionSuccess)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateInfoUser);
