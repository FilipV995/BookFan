import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import EBooksScreen from "../screens/EBooksScreen";
import LibrariesScreen from "../screens/LibrariesScreen";
import IconButton from "../components/IconButton";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: "#a52a2a9b",
        tabBarActiveTintColor: "#a52a2a9b",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IconButton icon={"home-outline"} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouritesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IconButton icon={"heart-outline"} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="EBooks"
        component={EBooksScreen}
        options={{
          title: "E-books",
          tabBarIcon: ({ color, size }) => (
            <IconButton icon={"book-outline"} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Libraries"
        component={LibrariesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IconButton icon={"library-outline"} size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
