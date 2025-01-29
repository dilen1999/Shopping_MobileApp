import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const addresses = [
  {
    id: "1",
    name: "Bruno Fernandes",
    address: "25 rue Robert Latouche, Nice, 06200, Côte D’azur, France",
    selected: true,
  },
  {
    id: "2",
    name: "Bruno Fernandes",
    address: "25 rue Robert Latouche, Nice, 06200, Côte D’azur, France",
    selected: false,
  },
  {
    id: "3",
    name: "Bruno Fernandes",
    address: "25 rue Robert Latouche, Nice, 06200, Côte D’azur, France",
    selected: false,
  },
];

export default function ShippingAddressScreen({ navigation }) {
  const [selectedAddress, setSelectedAddress] = useState("1");

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={24} color="#333" />
        </TouchableOpacity>

        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerText}>Shipping Address</Text>
        </View>
      </View>

      {/* Address List */}
      <FlatList
        data={addresses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <View style={styles.checkboxTop}>
              {/* Header: Use as shipping address */}
              <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={() => setSelectedAddress(item.id)}
              >
                <Icon
                  name={
                    selectedAddress === item.id ? "checkbox" : "square-outline"
                  }
                  size={24}
                  color="#000"
                />
                <Text style={styles.checkboxText}>
                  Use as the shipping address
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.addressCard}>
              {/* Row: Name & Edit Icon */}
              <View style={styles.nameRow}>
                <Text style={styles.name}>{item.name}</Text>
                <TouchableOpacity>
                  <Icon name="pencil-outline" size={20} color="#000" />
                </TouchableOpacity>
              </View>

              {/* Divider */}
              <View style={styles.divider} />

              {/* Address Info */}
              <Text style={styles.address}>{item.address}</Text>
            </View>
          </View>
        )}
      />

      {/* Add Address Button */}
      <TouchableOpacity style={styles.addButton}>
        <Icon name="add" size={30} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    paddingVertical: 10,
  },
  headerTitleContainer: {
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -75 }], // Adjust based on text width
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  checkboxTop: {
    flexDirection: "row",
    marginBottom: 10,
  },
  addressCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    marginBottom: 15,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
    fontWeight: "semi-bold",
  },
  nameRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginBottom: 10,
  },
  address: {
    fontSize: 14,
    color: "#555",
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 15,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
    elevation: 5,
  },
});
