import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import AppActions from "../../../redux/appRedux";
import { connect } from "react-redux";
import loGet from "lodash/get";

const Language = (props) => {
  const { changeLanguage, languageCurrent } = props;
  //   console.log(languageCurrent, "currentLanguage");
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          changeLanguage("en");
        }}
      >
        <Text>English</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          changeLanguage("vi");
        }}
      >
        <Text>Vietnamese</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = (state) => ({
  languageCurrent: loGet(state, ["app", "language"], undefined),
});
const mapDispatchToProps = (dispatch) => ({
  changeLanguage: (language) => dispatch(AppActions.changeLanguage(language)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Language);
