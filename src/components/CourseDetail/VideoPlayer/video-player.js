import React, { useRef, useState } from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import { Video } from "expo-av";
import { dimension } from "../../../globals/dimension";
import { Ionicons } from "@expo/vector-icons";

const VideoPlayer = (props) => {
  const { urlVideo, dataDetail = {} } = props;
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  if (urlVideo === undefined) {
    return (
      <View>
        <Image source={{ uri: dataDetail.imageUrl }} style={styles.video} />
      </View>
    );
  }

  if (urlVideo === null) {
    return (
      <View
        style={{
          ...styles.video,
          backgroundColor: "#FBF1E6",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons name="ios-videocam" size="50" color="gray" />
        <Text style={styles.text}>Comming soon</Text>
      </View>
    );
  }

  const getIdInVideo = (urlString) => {
    return urlString.substr(26, urlString.length - 1);
  };

  if (urlVideo.includes("youtube")) {
    return (
      <View>
        <YoutubePlayer
          ref={playerRef}
          height={225}
          width={dimension.width}
          videoId={getIdInVideo(urlVideo)}
          play={playing}
          // onChangeState={(event) => console.log(event)}
          onChangeState={(event) => {
            if (event === "paused") {
              playerRef.current.getCurrentTime().then((currentTime) => {
                props.handleUpdateCurrentVideoYoutube(currentTime);
              });
            }
          }}
          onReady={() => console.log("ready")}
          onError={(e) => {
            console.log(e);
            Alert.alert("Error");
          }}
          onPlaybackQualityChange={(q) => console.log(q)}
          volume={25}
          playbackRate={1}
          playerParams={{
            cc_lang_pref: "us",
            showClosedCaptions: true,
          }}
        />
      </View>
    );
  }
  return (
    <View>
      <Video
        style={styles.video}
        source={{
          uri: urlVideo,
        }}
        rate={1.0}
        volume={0.9}
        isMuted={false}
        resizeMode="contain"
        shouldPlay={false}
        isLooping={false}
        useNativeControls
      />
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    // height: dimension.height / 3,
    height: 200,
  },
  viewImage: {
    height: dimension.height / 3,
    width: "100%",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default VideoPlayer;
