import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";

import MapView, { Marker } from "react-native-maps";
import { useRoute } from "@react-navigation/native";

export default function LibraryDetailsScreen() {
  const route = useRoute();
  const item = route.params.item;

  let marker = { latitude: item.latitude, longitude: item.longitude };

  console.log("mnarker", marker);

  return (
    <View style={styles.container}>
      {/* <View style={styles.mapContainer}>
        {marker ? (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: marker.latitude,
              longitude: marker.longitude,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,
            }}
          >
            <Marker coordinate={marker} />
          </MapView>
        ) : null}
      </View>
      <View style={styles.distanceContainer}>
        <View style={styles.circleContainer}>
          <Text style={styles.distanceText}>100m</Text>
        </View>
        <Text>Distance from you</Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    height: "50%",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  distanceText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  distanceContainer: {
    marginTop: 30,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 0.5,
    paddingBottom: 20,
    borderColor: "grey",
  },
  circleContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    marginBottom: 10,
  },
});
