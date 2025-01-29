import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Tab = createMaterialTopTabNavigator();

const orders = [
  {
    id: "1",
    orderNo: "238562312",
    date: "20/03/2020",
    quantity: 3,
    amount: "$150",
    status: "Delivered",
  },
  {
    id: "2",
    orderNo: "238562313",
    date: "21/03/2020",
    quantity: 2,
    amount: "$100",
    status: "Delivered",
  },
  {
    id: "3",
    orderNo: "238562314",
    date: "22/03/2020",
    quantity: 5,
    amount: "$250",
    status: "Delivered",
  },
];

const OrderList = ({ status }) => (
  <View style={{ flex: 1 }}>
    {/* Order List */}
    <FlatList
      data={orders.filter((order) => order.status === status)}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <View style={styles.orderHeaderWrapper}>
            <View style={styles.orderHeader}>
              <Text style={styles.orderNo}>Order No {item.orderNo}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
          </View>
          <View style={styles.orderDetails}>
            <Text>
              Quantity: <Text style={styles.bold}>{item.quantity}</Text>
            </Text>
            <Text>
              Total Amount: <Text style={styles.bold}>{item.amount}</Text>
            </Text>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.detailButton}>
              <Text style={styles.detailText}>Detail</Text>
            </TouchableOpacity>
            <Text style={styles.deliveredText}>{item.status}</Text>
          </View>
        </View>
      )}
    />
  </View>
);

export default function MyOrderScreen() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Orders</Text>
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Delivered">
          {() => <OrderList status="Delivered" />}
        </Tab.Screen>
        <Tab.Screen name="Processing">
          {() => <OrderList status="Processing" />}
        </Tab.Screen>
        <Tab.Screen name="Canceled">
          {() => <OrderList status="Canceled" />}
        </Tab.Screen>
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    margin: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    alignItems: "center",
  },
  orderHeaderWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 10,
    marginBottom: 10,
  },

  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  orderHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  orderNo: {
    fontSize: 16,
    fontWeight: "bold",
  },
  date: {
    fontSize: 14,
    color: "#777",
  },
  orderDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  bold: {
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailButton: {
    backgroundColor: "#000",
    padding: 8,
    borderRadius: 5,
  },
  detailText: {
    color: "#fff",
  },
  deliveredText: {
    color: "green",
    fontWeight: "bold",
  },
});
