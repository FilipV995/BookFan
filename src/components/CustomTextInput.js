import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import IconButton from "./IconButton";

export default function CustomTextInput({
  icon,
  iconColor,
  placeholder,
  onChangeText,
  value,
}) {
  return (
    <View style={styles.container}>
      <IconButton icon={icon} size={32} color={iconColor} />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={"black"}
        // keyboardType="numeric"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    // borderColor: "#ccc",
    paddingBottom: 5,
  },
  input: {
    height: 40,
    paddingLeft: 15,
    flex: 1,
  },
});
