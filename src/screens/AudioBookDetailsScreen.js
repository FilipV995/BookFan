import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import IconButton from "../components/IconButton";
import { Audio } from "expo-av";
import { useFocusEffect } from "@react-navigation/native";
import CustomProgressBar from "../components/CustomProgressBar";

export default function AudioBookDetailsScreen() {
  const [sound, setSound] = React.useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  async function playSound() {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying((value) => !value);
    } else {
      console.log(" First time. Loading Sound");
      const { sound } = await Audio.Sound.createAsync(
        require("../assets/testAudio.mp3")
      );
      setSound(sound);

      console.log("Playing Sound");
      await sound.playAsync();
      setIsPlaying(true);
    }
  }

  async function playForwardHandler() {
    await sound.setPositionAsync(position + 20000);
  }

  async function playBackdHandler() {
    if (position >= 20000) {
      await sound.setPositionAsync(position - 20000);
    } else {
      await sound.setPositionAsync(0);
    }
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  async function getPlaybackStatus() {
    if (sound && isPlaying) {
      const status = await sound.getStatusAsync();
      setPosition(status.positionMillis);
      setDuration(status.durationMillis);
      console.log("Playback Status:", status);
    }
  }

  useEffect(() => {
    if (isPlaying) {
      getPlaybackStatus(); // Initial status check
      const interval = setInterval(getPlaybackStatus, 500); // Check every 500 milliseconds

      return () => {
        clearInterval(interval); // Cleanup to stop the interval when the component unmounts
      };
    }
  }, [isPlaying]);

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <IconButton icon={"arrow-back-outline"} size={24} color={"#a52a2a9b"} />
        <IconButton icon={"heart-outline"} size={24} color={"#a52a2a9b"} />
      </View>

      <View style={styles.view2}>
        <Image
          source={require("../assets/littlePrince.jpeg")}
          style={styles.audioImage}
        />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Little prince</Text>
        </View>
      </View>

      <View style={styles.view3}>
        <CustomProgressBar currentPosition={position} duration={duration} />
        <View style={styles.audioContainer}>
          <View style={styles.iconWrapper}>
            <IconButton
              icon={"play-back-outline"}
              size={24}
              color={"#a52a2a9b"}
              onPress={playBackdHandler}
            />
          </View>

          <View style={styles.iconWrapper}>
            <IconButton
              icon={isPlaying ? "pause-circle-outline" : "play-circle-outline"}
              size={24}
              color={"#a52a2a9b"}
              onPress={playSound}
            />
          </View>

          <View style={styles.iconWrapper}>
            <IconButton
              icon={"play-forward-outline"}
              size={24}
              color={"#a52a2a9b"}
              onPress={playForwardHandler}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#e4d4c5",
    flex: 1,
  },
  view1: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    marginRight: 10,
  },
  view2: {
    padding: 30,
  },
  audioImage: {
    width: "100%",
    height: 400,
    borderRadius: 15,
  },
  titleContainer: {
    marginTop: 10,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#a52a2a9b",
  },
  view3: {
    flex: 1,
    marginTop: 30,
    alignItems: "center",
  },
  audioContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconWrapper: {
    marginHorizontal: 10, // Add margin between icons
    marginVertical: 10,
  },
  progressBar: {
    width: "80%",
    height: 10,
    backgroundColor: "#ccc",
    borderRadius: 5,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#e5af7d79",
    borderRadius: 5,
  },
});
