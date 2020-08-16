import React from "react";
import { View, Text, StyleSheet } from "react-native";
import OptionItem from "./option-item";
import { connect } from "react-redux";
import loGet from "lodash/get";
import UserActions from "../../../redux/userRedux";
import CourseActions from "../../../redux/courseRedux";
import {
  ICONFAVORITE,
  ICONDOWNLOAD,
  ICONPAYMENT,
  ICONCHECKED,
} from "../../../config/icon";
import { stringify } from "querystring";
import I18n from "ex-react-native-i18n";

const ListOption = (props) => {
  let { item = {}, ownCourse } = props;
  const options = [
    {
      id: 1,
      imageRoute: ICONFAVORITE,
      title: I18n.t("key_favorite"),
    },
    {
      id: 2,
      imageRoute: ICONDOWNLOAD,
      title: I18n.t("key_download"),
    },
    {
      id: 3,
      imageRoute: ownCourse ? ICONCHECKED : ICONPAYMENT,
      title:
        item.price === 0
          ? ownCourse
            ? I18n.t("key_joined")
            : I18n.t("key_joining")
          : I18n.t("key_paying"),
    },
  ];

  return (
    <View style={styles.container}>
      <OptionItem optionItem={options[0]} handleOption={props.handleOption} />
      <OptionItem optionItem={options[1]} handleOption={props.handleOption} />
      <OptionItem optionItem={options[2]} handleOption={props.handleOption} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(ListOption);
