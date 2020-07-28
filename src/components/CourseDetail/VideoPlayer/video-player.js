import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Video } from "expo-av";
import { dimension } from "../../../globals/dimension";

const VideoPlayer = (props) => {
  const { id, dataDetail = {} } = props;

  return id !== undefined ? (
    <View>
      <Video
        style={styles.video}
        source={{
          uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        rate={1.0}
        volume={0.9}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={false}
        isLooping={false}
        useNativeControls
      />
    </View>
  ) : (
    <View style={{ ...styles.video, backgroundColor: "#FBF1E6" }}></View>
  );
};

const styles = StyleSheet.create({
  video: {
    height: dimension.height / 3,
  },
});

export default VideoPlayer;
