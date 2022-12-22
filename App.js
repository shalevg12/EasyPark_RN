import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/WelcomeScreen";
import HomeScreen from "./screens/HomeScreen";
import ItemScreen from "./screens/ItemScreen";
import ProfileScreen from "./screens/ProfileScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ManageParkingScreen from "./screens/ManageParkingScreen";
import MessagesScreen from "./screens/MessagesScreen";
import SyncParkingScreen from "./screens/SyncParkingScreen";
import MapView from "react-native-maps";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ItemScreen" component={ItemScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen
            name="SyncParkingScreen"
            component={SyncParkingScreen}
          />
          <Stack.Screen name="MessagesScreen" component={MessagesScreen} />
          <Stack.Screen
            name="ManageParkingScreen"
            component={ManageParkingScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
