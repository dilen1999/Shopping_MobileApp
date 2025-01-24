import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import GetStarted from "./screens/GetStarted";
// import LoginScreen from "./screens/LoginScreen";
// import SignupScreen from "./screens/SignupScreen";

const Stack = createNativeStackNavigator(); // Initialize the Stack Navigator

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="GetStated"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="GetStated" component={GetStarted} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
