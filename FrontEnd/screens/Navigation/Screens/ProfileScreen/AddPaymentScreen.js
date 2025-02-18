import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function AddPaymentScreen({ navigation }) {
  const [cardHolder, setCardHolder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Back Button */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Icon name="chevron-back-outline" size={24} color="#333" />
          </TouchableOpacity>

          {/* Header */}
          <Text style={styles.headerText}>Add payment method</Text>
        </View>

        <View style={styles.line}>
          {/* Credit Card Preview */}
          <View style={styles.cardPreview}>
            <View style={styles.cardLogos}>
              <Icon name="card-outline" size={40} color="#fff" />
              <Text style={styles.cardBrand}>VISA</Text>
            </View>
            <Text style={styles.cardNumber}>**** **** **** XXXX</Text>
            <View style={styles.cardDetails}>
              <Text style={styles.cardLabel}>Card Holder Name</Text>
              <Text style={styles.cardLabel}>Expiry Date</Text>
            </View>
            <View style={styles.cardDetails}>
              <Text style={styles.cardValue}>XXXXX</Text>
              <Text style={styles.cardValue}>XX/XX</Text>
            </View>
          </View>

          {/* Input Fields */}

          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>CardHolder Name</Text>
            <TextInput
              style={styles.input}
              placeholder="bruno pham"
              placeholderTextColor="#aaa"
              value={cardHolder}
              onChangeText={setCardHolder}
            />
          </View>

          <View style={styles.inputContainer1}>
            <Text style={styles.inputText}>Card Number</Text>
            <TextInput
              style={styles.input1}
              placeholder="**** **** **** 3456"
              placeholderTextColor="#aaa"
              keyboardType="numeric"
              value={cardNumber}
              onChangeText={setCardNumber}
            />
          </View>

          <View style={styles.row}>
            <View style={styles.inputContainer2}>
              <Text style={styles.inputText}>CVV</Text>
              <TextInput
                style={[styles.input, styles.smallInput]}
                placeholder="Ex: 123"
                placeholderTextColor="#aaa"
                keyboardType="numeric"
                secureTextEntry
                value={cvv}
                onChangeText={setCvv}
              />
            </View>

            <View style={styles.inputContainer3}>
              <Text style={styles.inputText}>Expiration Date</Text>
              <TextInput
                style={[styles.input1, styles.smallInput]}
                placeholder="03/22"
                placeholderTextColor="#aaa"
                value={expiry}
                onChangeText={setExpiry}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Add Card Button at Bottom */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.addButtonText}>ADD NEW CARD</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  line: {
    marginTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    width: "100%",
    gap: 10,
  },
  backButton: {
    alignSelf: "absolute",
    left: 0,
  },
  inputContainer: {
    marginBottom: 20,
    padding: 5,
    width: "100%",
    paddingHorizontal: 10,
    backgroundColor: "#f5f5f5",
    flexDirection: "column",
  },
  inputContainer1: {
    marginBottom: 20,
    padding: 5,
    width: "100%",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    flexDirection: "column",
    borderColor: "#ccc",
    borderWidth: 1, // Add this line
    borderRadius: 8,
  },
  inputContainer2: {
    flex: 1,
    marginBottom: 20,
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: "#f5f5f5",
    flexDirection: "column",
    borderRadius: 8,
    marginRight: 5,
  },
  inputContainer3: {
    flex: 1,
    marginBottom: 20,
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: "#fff", // Expiration background
    flexDirection: "column",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 5,
  },
  inputText: {
    color: "#999",
    marginBottom: 10,
  },
  inputText1: {
    color: "#fff",
    marginBottom: 10,
  },
  headerText: {
    flex: 1,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  cardPreview: {
    width: "100%",
    backgroundColor: "#1e1e1e",
    borderRadius: 12,
    mardingTop: 20,
    padding: 20,
    marginBottom: 20,
  },
  cardLogos: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardBrand: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 10,
  },
  cardNumber: {
    fontSize: 18,
    color: "#fff",
    marginVertical: 15,
  },
  cardDetails: {
    flexDirection: "row",
    marginBottom: 5,
    justifyContent: "space-between",
  },
  cardLabel: {
    color: "#aaa",
    fontSize: 12,
  },
  cardValue: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#f5f5f5",
    // padding: 15,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 10,
    outlineStyle: "none",
    borderColor: "transparent",
    borderWidth: 0,
  },
  input1: {
    backgroundColor: "#fff",
    // padding: 15,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 10,
    outlineStyle: "none",
    borderColor: "transparent",
    borderWidth: 0,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    // width: "100%",
    alignItems: "stretch",
  },
  smallInput: {
    width: "48%",
  },
  addButton: {
    marginTop: 20,
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  footer: {
    width: "100%",
    paddingVertical: 20,
    backgroundColor: "#fff",
  },
});
