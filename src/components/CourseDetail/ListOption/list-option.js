import React from "react";
import { View, Text, StyleSheet } from "react-native";
import OptionItem from "./option-item";
import { connect } from "react-redux";
import loGet from "lodash/get";
import UserActions from "../../../redux/userRedux";
import CourseActions from "../../../redux/courseRedux";
import { ICONFAVORITE, ICONDOWNLOAD, ICONPAYMENT } from "../../../config/icon";
import { stringify } from "querystring";

const ListOption = (props) => {
  let { item = {} } = props;
  const options = [
    {
      id: 1,
      imageRoute: ICONFAVORITE,
      title: "Favorite",
    },
    {
      id: 2,
      imageRoute: ICONDOWNLOAD,
      title: "Download",
    },
    {
      id: 3,
      imageRoute: ICONPAYMENT,
      title: item.price === 0 ? "Joining" : "Paying",
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
