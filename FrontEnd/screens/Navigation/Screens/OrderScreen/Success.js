import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import success from "../../../../assets/success.png";

const Success = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SUCCESS!</Text>
      <Image source={success} style={styles.deliveryLogo} />
      <Text style={styles.message}>
        Your order will be delivered soon. Thank you for choosing our app!
      </Text>
      <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={() => navigation.navigate("Orders")}
      >
        <Text style={styles.buttonText}>Track your orders</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => navigation.navigate("Home")}
      >
        <Text
          style={styles.buttonTextSecondary}
          onPress={() => navigation.navigate("Main")}
        >
          Back to Home
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
  },
  buttonPrimary: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonSecondary: {
    backgroundColor: "#fff",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonTextSecondary: {
    color: "#000",
    fontSize: 16,
  },
});

export default Success;
