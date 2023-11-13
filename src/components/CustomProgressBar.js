import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";

export default function CustomProgressBar({ currentPosition, duration }) {
  const percentage = currentPosition ? currentPosition / duration : 0;
  console.log({ currentPosition, duration, percentage });

  return (
    <View>
      <Progress.Bar
        progress={percentage}
        width={200}
        unfilledColor="white"
        borderWidth={0}
        showsText={true}
        color={"#a52a2a9b"}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
