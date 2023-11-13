import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import CustomTextInput from "./CustomTextInput";
import IconButton from "./IconButton";

export default function SearchComponent({ onChangeText, value, onPress }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={"Search by location"}
        placeholderTextColor={"grey"}
      />
      <IconButton
        icon={"search-outline"}
        size={25}
        color={"#a52a2a9b"}
        onPress={onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: "#dad9d9",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    height: 20,
    flex: 1,
  },
});
