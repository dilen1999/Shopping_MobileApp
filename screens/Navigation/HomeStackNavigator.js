import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import MyCart from "./Screens/HomeScreen/MyCart";

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeMain" component={HomeScreen} />
      <HomeStack.Screen name="MyCart" component={MyCart} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
