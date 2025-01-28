import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Checkout = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header Row */}
      <View style={styles.headerRow}>
        <TouchableOpacity
          onPress={() => navigation.goBack()} // Back navigation
          style={styles.backButton}
        >
          <Icon name="chevron-back-outline" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Check out</Text> {/* Centered title */}
      </View>

      {/* Shipping Address */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Shipping Address</Text>
          <TouchableOpacity
            onPress={() => console.log("Edit Shipping Address")}
          >
            <Icon
              name="pencil"
              size={20}
              color="#666"
              style={styles.editIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.sectionContent}>
          <Text style={styles.boldText}>Bruno Fernandes</Text>
          {/* Divider */}
          <View style={styles.divider} />
          <Text style={styles.lightText}>
            25 rue Robert Latouche, Nice, 06200, Côte D'azur, France
          </Text>
        </View>
      </View>

      {/* Payment */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Payment</Text>
          <TouchableOpacity
            onPress={() => console.log("Edit Shipping Address")}
          >
            <Icon
              name="pencil"
              size={20}
              color="#666"
              style={styles.editIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.sectionContent}>
          <Image
            // source={require("../assets/loginheader.png")}
            style={styles.paymentLogo}
          />
          <Text style={styles.lightText}>**** **** **** 3947</Text>
        </View>
      </View>

      {/* Delivery Method */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Delivery method</Text>
          <TouchableOpacity
            onPress={() => console.log("Edit Shipping Address")}
          >
            <Icon
              name="pencil"
              size={20}
              color="#666"
              style={styles.editIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.sectionContent}>
          <Image
            source={{ uri: "https://via.placeholder.com/50x30" }} // Replace with DHL logo image URL
            style={styles.deliveryLogo}
          />
          <Text style={styles.lightText}>Fast (2-3 days)</Text>
        </View>
      </View>

      {/* Order Summary */}
      <View style={styles.summary}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Order:</Text>
          <Text style={styles.summaryValue}>$95.00</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Delivery:</Text>
          <Text style={styles.summaryValue}>$5.00</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={[styles.summaryLabel, styles.totalText]}>Total:</Text>
          <Text style={[styles.summaryValue, styles.totalText]}>$100.00</Text>
        </View>
      </View>

      {/* Submit Order Button */}
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => navigation.navigate("Success")}
      >
        <Text style={styles.submitText}>SUBMIT ORDER</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center", // Ensure title is centered
    flex: 1, // Allow title to take available space for centering
  },
  section: { marginBottom: 20 },
  sectionTitle: { fontSize: 16, fontWeight: "semi-bold", marginBottom: 10 },
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 10, // Space around the divider
    alignSelf: "stretch", // Ensures it spans the full width of the container
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  editIcon: {
    marginLeft: 10,
  },

  sectionContent: {
    flexDirection: "colomn",
    alignItems: "left",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  boldText: { fontWeight: "bold", fontSize: 16 },
  lightText: { color: "#666", fontSize: 14 },
  paymentLogo: { width: 40, height: 25, marginRight: 10 },
  deliveryLogo: { width: 50, height: 30, marginRight: 10 },
  summary: {
    padding: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    marginBottom: 20,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  summaryLabel: { fontSize: 16, color: "#666" },
  summaryValue: { fontSize: 16, fontWeight: "bold" },
  totalText: { fontSize: 18, color: "#000" },
  submitButton: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  submitText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default Checkout;
