import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { BLUE_1 } from "../../config/color";

const Button = (props) => {
  const {
    text,
    handlePress,
    disabled = false,
    type = "normal",
    backgroundColor = "#417AF9",
  } = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      style={
        disabled
          ? buttonStyle.disabledBtn
          : type === "normal"
          ? { ...buttonStyle.button, ...{ backgroundColor: backgroundColor } }
          : {
              ...buttonStyle.button,
              ...{
                backgroundColor: "white",
                borderColor: BLUE_1,
                borderWidth: 1,
              },
            }
      }
      color
      underlayColor="#4EAFE9"
      onPress={handlePress}
    >
      <Text
        style={
          type === "normal"
            ? buttonStyle.buttonText
            : { ...buttonStyle.buttonText, ...{ color: BLUE_1 } }
        }
      >
        {text.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};

const buttonStyle = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: "#417AF9",
    height: 40,
    borderRadius: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 8,
    zIndex: 99, // works on ios
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    alignItems: "center",
  },
  disabledBtn: {
    width: "100%",
    backgroundColor: "#7ca4e9",
    height: 40,
    borderRadius: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 8,
    zIndex: 99, // works on ios
  },
});

export default Button;
