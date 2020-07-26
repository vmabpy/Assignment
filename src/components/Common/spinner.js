import React from "react";
import { BLUE_1 } from "../../config/color";
import { ActivityIndicator, View, StyleSheet } from "react-native";

const Spinner = ({ isLoading }) => {
  isLoading ? (
    <View style={styles.container}>
      <View>
        <ActivityIndicator
          transparent={true}
          size="large"
          color={BLUE_1}
          animating={isLoading}
        />
      </View>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
  },
});
