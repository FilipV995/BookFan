import { Pressable, StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { useAuth } from "../context/AuthStateContext";
import BookItem from "../components/BookItem";
import { useNavigation } from "@react-navigation/native";

export default function EBooksScreen() {
  const { token, saveToken } = useAuth();
  const navigation = useNavigation();

  const logoutHangler = () => {
    saveToken(null);
  };
  const books = [
    {
      title: "Gulliver",
      description:
        "The story follows a young prince who visits various planets, and addresses themes of loneliness, friendship, love, and los",
      imageUrl: require("../assets/gulliver.jpeg"),
      backgroundColor: "#ccd4d4",
    },
    {
      title: "Little prince",
      description:
        "The story follows a young prince who visits various planets, and addresses themes of loneliness, friendship, love, and los",
      imageUrl: require("../assets/littlePrince.jpeg"),
      backgroundColor: "#e4d4c5",
    },
    {
      title: "Alice in Wonderland",
      description:
        "The story follows a young prince who visits various planets, and addresses themes of loneliness, friendship, love, and los",
      imageUrl: require("../assets/alice.webp"),
      backgroundColor: "#81a9c1",
    },
  ];

  const onPressHandler = () => {
    navigation.navigate("AudioDetails");
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <BookItem book={item} onPress={onPressHandler} />
        )}
      />
      {/* <Pressable onPress={logoutHangler}>
        <Text>Logout</Text>
      </Pressable> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,

    flex: 1,
  },
});
