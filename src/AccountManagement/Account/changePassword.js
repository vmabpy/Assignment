import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

const initialState = {
  oldPassword: {
    value: "",
    isValid: true,
  },
  newPassword: {
    value: "",
    isValid: true,
  },
  confirmNewPassword: {
    value: "",
    isValid: true,
  },
};
const Changepassword = (props) => {
  const [data, setData] = useState(initialState);
  const { changePassword } = props;

  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  changePassword: (params, actionSuccess) =>
    dispatch(UserActions.changePasswordRequest(params, actionSuccess)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Changepassword);
