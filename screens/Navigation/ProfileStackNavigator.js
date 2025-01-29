import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ProfileScreen from "./Screens/ProfileScreen";
import MyOrderScreen from "./Screens/ProfileScreen/MyOrderScreen";
import ShippingAddressScreen from "./Screens/ProfileScreen/ShippingAddressScreen";

const ProfileStack = createNativeStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen name="MyOrders" component={MyOrderScreen} />
      <ProfileStack.Screen
        name="ShippingAddress"
        component={ShippingAddressScreen}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackNavigator;
