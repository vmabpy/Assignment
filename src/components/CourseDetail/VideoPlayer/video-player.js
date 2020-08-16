import React, { useRef, useState, useEffect } from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import { Video } from "expo-av";
import { dimension } from "../../../globals/dimension";
import { Ionicons } from "@expo/vector-icons";

const VideoPlayer = (props) => {
  const { urlVideo, dataDetail = {}, currentTime } = props;
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    // const seek = async (time) => {
    //   console.log("Vao khong ne");
    //   await playerRef.current.seekTo(Int(time));
    // };
    // if (urlVideo !== undefined && urlVideo.includes("youtube")) {
    //   if (currentTime !== undefined && playerRef.current !== undefined) {
    // seek(10);
    // playerRef.current.seekTo(parseInt(currentTime));
    // console.log("vao giup");
    // console.log(playerRef.current);
    // console.log(typeof playerRef.seekTo);
    //   }
    // }
    setPlaying(true);
  }, [urlVideo]);

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
          ref={(player) => (playerRef.current = player)}
          height={225}
          width={dimension.width}
          videoId={getIdInVideo(urlVideo)}
          play={playing}
          // onChangeState={(event) => console.log(event)}
          onChangeState={(event) => {
            if (event === "paused") {
              setPlaying(false);
              playerRef.current.getCurrentTime().then((time) => {
                props.handleUpdateCurrentVideoYoutube(time);
              });
            } else if (event === "playing") {
              setPlaying(true);
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
          initialPlayerParams={{
            start: parseInt(currentTime),
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
        shouldPlay={true}
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
