import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import AppActions from "../../../redux/appRedux";
import { connect } from "react-redux";
import loGet from "lodash/get";
import { ICONTICK } from "../../../config/icon";
import I18n from "ex-react-native-i18n";

const Language = (props) => {
  const { changeLanguage, languageCurrent } = props;
  console.log(languageCurrent, "currentLanguage");
  return (
    <ScrollView style={{ flex: 1 }}>
      <TouchableOpacity
        style={styles.viewEn}
        onPress={() => {
          changeLanguage("en");
        }}
      >
        <Text style={styles.text}>{I18n.t("key_en")}</Text>
        {languageCurrent === "en" && (
          <Image source={ICONTICK} style={styles.image} />
        )}
      </TouchableOpacity>
      <View style={styles.separator}></View>
      <TouchableOpacity
        style={styles.viewVi}
        onPress={() => {
          changeLanguage("vi");
        }}
      >
        <Text style={styles.text}>{I18n.t("key_vi")}</Text>
        {languageCurrent === "vi" && (
          <Image source={ICONTICK} style={styles.image} />
        )}
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewEn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
  },
  viewVi: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
  },
  text: {
    marginLeft: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "#E7E8E8",
    marginHorizontal: 10,
  },
  image: {
    height: 20,
    width: 20,
  },
});

const mapStateToProps = (state) => ({
  languageCurrent: loGet(state, ["app", "language"], undefined),
});
const mapDispatchToProps = (dispatch) => ({
  changeLanguage: (language) => dispatch(AppActions.changeLanguage(language)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Language);
