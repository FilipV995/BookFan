import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import IconButton from "./IconButton";
import { Rating, AirbnbRating } from "react-native-ratings";

export default function OverviewItem({ book, onAddToFavorites, onPress }) {
  const getRandomBookImageLink = () => {
    const randomImageId = Math.floor(Math.random() * 1000);
    return `https://picsum.photos/id/${randomImageId}/300/400`;
  };
  const bookImageLink = getRandomBookImageLink();

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: bookImageLink }} style={styles.imageOverlay} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{book.name}</Text>
          <Text style={styles.description}>{book.type}</Text>

          <AirbnbRating
            reviewSize={0}
            count={5}
            defaultRating={book.id}
            size={15}
            //   onFinishRating={handleRatingCompleted}
            ratingContainerStyle={{
              padding: 0,
              margin: 0,
              alignContent: "flex-start",
              alignItems: "flex-start",
            }}
            isDisabled={true}
            selectedColor="#a52a2a9b"
          />

          <Text style={styles.priceText}>{book?.price}</Text>
        </View>
        <View
          style={[
            styles.favouriteContainer,
            { backgroundColor: book.backgroundColor },
          ]}
        >
          <TouchableOpacity onPress={onAddToFavorites}>
            <IconButton
              color={"#a52a2a9b"}
              size={30}
              icon={book.isFavourite ? "heart" : "heart-outline"}
              onPress={onAddToFavorites}
            />
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
    borderWidth: 1,
    borderColor: "#a52a2a9b",
    margin: 10,
    padding: 10,
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
    marginBottom: 10,
  },
  favouriteContainer: {
    justifyContent: "flex-end",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  imageContainer: {
    width: 90,
    height: 120,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  imageOverlay: {
    width: "100%",
    height: "100%",
    // borderTopLeftRadius: 10,
    // borderBottomLeftRadius: 10,
    borderRadius: 10,
  },
  rating: {
    margin: 0,
    padding: -199,
    backgroundColor: "yellow",
    // Additional styles for the rating component
  },
  priceText: {
    color: "#a52a2a9b",
  },
});
