import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ProfileScreen from "./Screens/ProfileScreen";
import MyOrderScreen from "./Screens/ProfileScreen/MyOrderScreen";
import ShippingAddressScreen from "./Screens/ProfileScreen/ShippingAddressScreen";
import PaymentMethodScreen from "./Screens/ProfileScreen/PaymentMethodScreen";
import MyReviewsScreen from "./Screens/ProfileScreen/MyReviewsScreen";
import AddAddressScreen from "./Screens/ProfileScreen/AddAddressScreen";
import AddPaymentScreen from "./Screens/ProfileScreen/AddPaymentScreen";
import SettingsScreen from "./Screens/ProfileScreen/SettingsScreen";

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
      <ProfileStack.Screen
        name="PaymentMethod"
        component={PaymentMethodScreen}
      />
      <ProfileStack.Screen name="MyReview" component={MyReviewsScreen} />
      <ProfileStack.Screen name="AddAddress" component={AddAddressScreen} />
      <ProfileStack.Screen name="AddPayment" component={AddPaymentScreen} />
      <ProfileStack.Screen name="Setting" component={SettingsScreen} />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackNavigator;
