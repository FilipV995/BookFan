import { StyleSheet, Text, View, FlatList, Modal } from "react-native";
import React, { useEffect, useState } from "react";
import { getBooks, getBooksByAuthor, addBooks } from "../network/lib/book";
import { useAuth } from "../context/AuthStateContext";

import OverviewItem from "../components/OverviewItem";

export default function OverviewScreen() {
  const [books, setBooks] = useState(null);
  const { allBooks, saveAllBooks } = useAuth();

  const searchBooks = () => {
    getBooksByAuthor("fiction").then(function (response) {
      console.log("API TEST WITH TYPE:", response.data);
      setBooks(response.data);
    });
  };

  useEffect(() => {
    getBooks().then(function (response) {
      console.log("API TEST:", response.data);
      setBooks(response.data);
      saveAllBooks(response.data);
    });
  }, []);

  const onPressHandler = () => {};
  return (
    <View>
      <FlatList
        data={books}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <OverviewItem book={item} onPress={onPressHandler} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
