import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import loGet from "lodash/get";
import FlashMessage from "react-native-flash-message";
import { Spinner } from "../components/Common/spinner";
import { View } from "react-native";
import MainStackNavigator from "../navigation/";

const MainApp = (props) => {
  const { isRequesting, languageLocal } = props;
  const [state, setState] = useState(new Date().getTime());

  useEffect(() => {
    setState(new Date().getTime());
  }, [languageLocal]);
  return (
    <View style={{ flex: 1 }} key={state}>
      <MainStackNavigator />
      {/* <Spinner isLoading={isRequesting} /> */}
      <FlashMessage position="top" />
    </View>
  );
};

const mapStateToProps = (state) => ({
  isRequesting: loGet(state, ["app", "isShowingIndicator"], false),
  languageLocal: loGet(state, ["app", "language"], "en"),
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
