import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useMemo, useState } from "react";
import LibraryItem from "../components/LibraryItem";
import SearchComponent from "../components/SearchComponent";
import { useNavigation } from "@react-navigation/native";

export default function LibrariesScreen() {
  const navigation = useNavigation();
  const libraries = [
    {
      libraryName: "Kocho Racin",
      typeName: "For rent",
      location: "Tetovo",
      phoneNumber: "078 888 888",
      latitude: "42.007555831835866",
      longitude: "20.970389764369983",
    },
    {
      libraryName: "Braka Miladinovci",
      typeName: "For rent",
      location: "Struga",
      phoneNumber: "078 888 888",
    },
    {
      libraryName: "Goce Delchev",
      typeName: "For rent",
      location: "Veles",
      phoneNumber: "078 888 888",
    },
  ];

  const [filteredLibraries, setFilteredLibraries] = useState(null);
  const [searchText, setSearchText] = useState(null);

  function onChangeValue(enteredValue) {
    console.log("entered value", enteredValue);
    setSearchText(enteredValue);
  }

  const searchHandler = () => {
    let result = libraries.filter((library) =>
      library.location.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredLibraries(result);
    console.log("result", result);
  };

  return (
    <View>
      <SearchComponent
        onChangeText={onChangeValue}
        value={searchText}
        onPress={searchHandler}
      />
      <FlatList
        data={filteredLibraries ? filteredLibraries : libraries}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <LibraryItem library={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
