import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function AddPaymentScreen({ navigation }) {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Icon name="chevron-back-outline" size={24} color="#333" />
      </TouchableOpacity>

      <Text style={styles.headerText}>Add Payment Method</Text>

      <TextInput
        style={styles.input}
        placeholder="Card Number"
        keyboardType="numeric"
        value={cardNumber}
        onChangeText={setCardNumber}
      />

      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.smallInput]}
          placeholder="MM/YY"
          value={expiry}
          onChangeText={setExpiry}
        />
        <TextInput
          style={[styles.input, styles.smallInput]}
          placeholder="CVV"
          keyboardType="numeric"
          secureTextEntry
          value={cvv}
          onChangeText={setCvv}
        />
      </View>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => alert("Card Added!")}
      >
        <Text style={styles.addButtonText}>ADD CARD</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
  },
  backButton: {
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  smallInput: {
    width: "48%",
  },
  addButton: {
    marginTop: 20,
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 10,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
