import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavouritesScreen from "../screens/FavouritesScreen";
import EBooksScreen from "../screens/EBooksScreen";
import LibrariesScreen from "../screens/LibrariesScreen";
import IconButton from "../components/IconButton";
import OverviewScreen from "../screens/OverviewScreen";

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
        name="Overview"
        component={OverviewScreen}
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
