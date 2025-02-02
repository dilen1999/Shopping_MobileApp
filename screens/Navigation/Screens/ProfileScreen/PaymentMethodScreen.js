import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const cards = [
  {
    id: "1",
    type: "Mastercard",
    last4: "3947",
    holder: "Jennyfer Doe",
    expiry: "05/23",
    selected: true,
    color: "#000",
    logo: require("../../../../assets/mastercard.png"), // Add Mastercard logo
  },
  {
    id: "2",
    type: "Visa",
    last4: "3947",
    holder: "Jennyfer Doe",
    expiry: "05/23",
    selected: false,
    color: "#87898b",
    logo: require("../../../../assets/visa.png"), // Add Visa logo
  },
];

export default function PaymentMethodScreen({ navigation }) {
  const [selectedCard, setSelectedCard] = useState("1");

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={24} color="#333" />
        </TouchableOpacity>

        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerText}>Payment Method</Text>
        </View>
      </View>

      {/* Card List */}
      <FlatList
        data={cards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <View
              style={[
                styles.cardContainer,
                {
                  backgroundColor: item.color,
                  opacity: item.selected ? 1 : 0.6,
                },
              ]}
            >
              <View style={styles.cardTop}>
                {/* Display Logo Instead of Text */}
                <View style={styles.sectionContent}>
                  <Image source={item.logo} style={styles.paymentLogo} />
                  <Text style={styles.cardNumber}>
                    **** **** ****
                    <Text style={styles.last4}> {item.last4}</Text>
                  </Text>
                </View>
              </View>

              <View style={styles.cardBottom}>
                <View>
                  <Text style={styles.cardLabel}>Card Holder Name</Text>
                  <Text style={styles.cardValue}>{item.holder}</Text>
                </View>
                <View>
                  <Text style={styles.cardLabel}>Expiry Date</Text>
                  <Text style={styles.cardValue}>{item.expiry}</Text>
                </View>
              </View>
            </View>
            {/* Checkbox */}
            <TouchableOpacity
              style={styles.checkboxContainer}
              onPress={() => setSelectedCard(item.id)}
            >
              <Icon
                name={selectedCard === item.id ? "checkbox" : "square-outline"}
                size={24}
                color={selectedCard === item.id ? "#000" : "#333"}
              />
              <Text style={styles.checkboxText}>
                Use as default payment method
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Add Card Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("AddPayment")}
      >
        <Icon name="add" size={30} color="#000" />
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
    paddingVertical: 10,
    position: "relative",
  },
  headerTitleContainer: {
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -75 }],
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  cardContainer: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    marginTop: 20,
  },
  last4: {
    marginLeft: 20,
    color: "#fff",
    fontSize: 18,
  },
  cardTop: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  sectionContent: {
    flexDirection: "column",
    alignItems: "left",
  },
  paymentLogo: {
    width: 40,
    height: 25,
    marginRight: 10,
    marginBottom: 10,
  },
  cardNumber: {
    fontSize: 18,
    color: "#fff",
  },
  cardBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
  },
  cardLabel: {
    fontSize: 12,
    color: "#ddd",
    marginBottom: 5,
  },
  cardValue: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 14,
    color: "#333",
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
