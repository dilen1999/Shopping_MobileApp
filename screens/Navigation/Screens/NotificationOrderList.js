import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

const OrderListScreen = ({ route }) => {
  const { orderId } = route.params;
  const navigation = useNavigation();

  // Sample Order Details (Replace with API Data)
  const orderDetails = {
    orderId: orderId,
    status: "Processing",
    expectedDelivery: "Feb 15, 2025",
    totalAmount: 150.0,
    discount: 10.0,
    finalAmount: 140.0,
    paymentMethod: "Credit Card (Visa)",
    products: [
      { id: "1", name: "Wooden Chair", quantity: 2, price: 50.0 },
      { id: "2", name: "Office Desk", quantity: 1, price: 100.0 },
    ],
  };

  return (
    <View style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            if (navigation.canGoBack()) {
              navigation.goBack();
            } else {
              navigation.navigate("Home"); // Fallback navigation
            }
          }}
          style={styles.backButton}
        >
          <Icon name="chevron-back-outline" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Order Details</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Order Details */}
        <View style={styles.orderDetailsContainer}>
          <Text style={styles.orderText}>Order ID: {orderDetails.orderId}</Text>
          <Text style={styles.orderText}>Status: {orderDetails.status}</Text>
          <Text style={styles.orderText}>
            Expected Delivery: {orderDetails.expectedDelivery}
          </Text>
        </View>

        {/* Product List */}
        <Text style={styles.sectionTitle}>Products:</Text>
        <FlatList
          data={orderDetails.products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.productItem}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productDetails}>
                Quantity: {item.quantity} | Price: ${item.price}
              </Text>
            </View>
          )}
        />

        {/* Order Summary */}
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>
            Total Amount: ${orderDetails.totalAmount}
          </Text>
          <Text style={styles.summaryText}>
            Discount: -${orderDetails.discount}
          </Text>
          <Text style={styles.finalAmountText}>
            Final Amount: ${orderDetails.finalAmount}
          </Text>
          <Text style={styles.paymentMethod}>
            Payment Method: {orderDetails.paymentMethod}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  backButton: {
    position: "absolute",
    left: 0,
    padding: 10,
  },
  orderDetailsContainer: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 15,
  },
  title: {
    flex: 1,
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  orderText: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  productItem: {
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productDetails: {
    fontSize: 14,
    color: "#555",
  },
  summaryContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#fff3e0",
    borderRadius: 8,
  },
  summaryText: {
    fontSize: 16,
    marginBottom: 5,
  },
  finalAmountText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },
  paymentMethod: {
    fontSize: 16,
    marginTop: 10,
    color: "#333",
    fontStyle: "italic",
  },
});

export default OrderListScreen;
