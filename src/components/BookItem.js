import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import IconButton from "./IconButton";

export default function BookItem({ book, onAddToFavorites, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={book.imageUrl} style={styles.imageOverlay} />
        </View>
        <View
          style={[
            styles.infoContainer,
            { backgroundColor: book.backgroundColor },
          ]}
        >
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.description}>{book.description}</Text>
        </View>
        <View
          style={[
            styles.favouriteContainer,
            { backgroundColor: book.backgroundColor },
          ]}
        >
          <TouchableOpacity onPress={onAddToFavorites}>
            <IconButton color={"#a52a2a9b"} size={24} icon={"heart-outline"} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 10,
    paddingBottom: 20,
  },

  infoContainer: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 13,
  },
  favouriteContainer: {
    justifyContent: "flex-end",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  imageContainer: {
    width: 90,
    height: 120,
  },

  imageOverlay: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
