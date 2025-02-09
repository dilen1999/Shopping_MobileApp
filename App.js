import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import GetStarted from "./screens/GetStarted";
import MainContainer from "./screens/Navigation/MainContainer";
import Checkout from "./screens/Navigation/Screens/OrderScreen/Checkout";
import Success from "./screens/Navigation/Screens/OrderScreen/Success";
import ProductScreen from "./screens/Navigation/Screens/HomeScreen/ProductScreen";
import MyCart from "./screens/Navigation/Screens/HomeScreen/MyCart";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="GetStated" component={GetStarted} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Main" component={MainContainer} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="MyCart" component={MyCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
