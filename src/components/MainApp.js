import React from "react";
import { connect } from "react-redux";
import loGet from "lodash/get";
import FlashMessage from "react-native-flash-message";
import { Spinner } from "../components/Common/spinner";
import { View } from "react-native";
import MainStackNavigator from "../navigation/";

const MainApp = (props) => {
  const { isRequesting } = props;
  return (
    <View style={{ flex: 1 }}>
      <MainStackNavigator />
      {/* <Spinner isLoading={isRequesting} /> */}
      <FlashMessage position="top" />
    </View>
  );
};

const mapStateToProps = (state) => ({
  isRequesting: loGet(state, ["app", "isShowingIndicator"], false),
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
