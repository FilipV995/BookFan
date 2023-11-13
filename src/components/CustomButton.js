import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function CustomButton({
  title,
  backgroundColor,
  textColor,
  onPress,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.container,
          backgroundColor
            ? { backgroundColor: backgroundColor }
            : { backgroundColor: "#a52a2a9b" },
        ]}
      >
        <Text
          style={[
            styles.text,
            textColor ? { color: textColor } : { color: "black" },
          ]}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    height: 35,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
  },
});
