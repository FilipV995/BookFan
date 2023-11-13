import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAuth } from "../context/AuthStateContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./MyTabs";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import AudioBookDetailsScreen from "../screens/AudioBookDetailsScreen";
import LibraryDetailsScreen from "../screens/LibraryDetailsScreen";

export default function MainNavigator() {
  const Stack = createNativeStackNavigator();
  const { token, saveToken } = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {token ? (
          <>
            <Stack.Screen
              name="BottomTab"
              component={MyTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AudioDetails"
              component={AudioBookDetailsScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LibraryDetalis"
              component={LibraryDetailsScreen}
              options={{ headerShown: true }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
