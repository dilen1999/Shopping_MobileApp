import React from "react";
import NotificationScreen from "./Screens/NotificationScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrderListScreen from "./Screens/NotificationOrderList";

const NotificationStack = createNativeStackNavigator();

const NotificationStackNavigator = () => {
  return (
    <NotificationStack.Navigator screenOptions={{ headerShown: false }}>
      <NotificationStack.Screen
        name="Notification"
        component={NotificationScreen}
      />
      <NotificationStack.Screen name="OrderList" component={OrderListScreen} />
    </NotificationStack.Navigator>
  );
};
export default NotificationStackNavigator;
