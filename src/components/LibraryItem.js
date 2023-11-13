import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function LibraryItem({ library }) {
  console.log("library", library);
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("LibraryDetalis", { item: library });
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <Text style={styles.title}>Library:</Text>
          <Text style={styles.input}>{library.libraryName}</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.title}>Type:</Text>
          <Text style={styles.input}>{library.typeName}</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.title}>Location:</Text>
          <Text style={styles.input}>{library.location}</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.title}>Phone number:</Text>
          <Text style={styles.input}>{library.phoneNumber}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    borderColor: "#a52a2a9b",
    marginHorizontal: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#a52a2a9b",
  },
  rowContainer: {
    flexDirection: "row",
    marginVertical: 5,
    backgroundColor: "#e8e5e5",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  input: {
    marginLeft: 5,
  },
});
