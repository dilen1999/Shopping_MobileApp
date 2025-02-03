import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function SettingsScreen({ navigation }) {
  const [sales, setSales] = useState(true);
  const [newArrivals, setNewArrivals] = useState(false);
  const [deliveryStatus, setDeliveryStatus] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.iconWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-back-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerText}>Settings</Text>
        <View style={styles.iconWrapper} />{" "}
        {/* Empty View for center alignment */}
      </View>

      {/* Personal Information */}
      <View style={styles.rowContainer}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <TouchableOpacity>
          <Icon name="pencil-outline" size={18} color="#666" />
        </TouchableOpacity>
      </View>
      {/* <View style={styles.inputContainer}>
        <View>
          <Text style={styles.inputText}>Name</Text>
        </View>
        <View>
          <TextInput style={styles.input} value="Bruno Pham" editable={false} />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.inputText}>Email</Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            value="bruno203@gmail.com"
            editable={false}
          />
        </View>
      </View> */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Name</Text>
        <TextInput style={styles.input} value="Bruno Pham" editable={false} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Email</Text>
        <TextInput
          style={styles.input}
          value="bruno203@gmail.com"
          editable={false}
        />
      </View>

      {/* Password Section */}
      <View style={styles.rowContainer}>
        <Text style={styles.sectionTitle}>Password</Text>
        <TouchableOpacity>
          <Icon name="pencil-outline" size={18} color="#666" />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Name</Text>
        <TextInput style={styles.input} value="************" editable={false} />
      </View>

      {/* Notifications Section */}
      <Text style={styles.sectionTitle}>Notifications</Text>
      <View style={styles.notificationContainer}>
        <Text style={styles.notificationText}>Sales</Text>
        <Switch value={sales} onValueChange={setSales} />
      </View>

      <View style={styles.notificationContainer}>
        <Text style={styles.notificationText}>New arrivals</Text>
        <Switch value={newArrivals} onValueChange={setNewArrivals} />
      </View>

      <View style={styles.notificationContainer}>
        <Text style={styles.notificationText}>Delivery status changes</Text>
        <Switch value={deliveryStatus} onValueChange={setDeliveryStatus} />
      </View>

      {/* Help Center */}
      <Text style={styles.sectionTitle}>Help Center</Text>
      <TouchableOpacity style={styles.helpCenter}>
        <Text style={styles.helpText}>FAQ</Text>
        <Icon name="chevron-forward-outline" size={20} color="#666" />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  iconWrapper: {
    width: 30, // Ensures the icon and empty space for alignment
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1, // Makes sure the text is centered
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 5,
    color: "#ccc",
  },
  // Updated inputContainer with white background and shadow
  inputContainer: {
    width: "100%",
    backgroundColor: "#fff", // White background
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    flexDirection: "column", // Ensure label and input stack vertically
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
  },

  inputText: {
    color: "#999",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#fff", // White background
    borderRadius: 8,
    fontSize: 16,
    padding: 10,
    borderWidth: 0,
  },

  // Updated notificationContainer with shadow
  notificationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#fff", // White background
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
  },
  notificationText: {
    fontSize: 14,
  },

  // Updated helpCenter with shadow
  helpCenter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff", // White background
    borderRadius: 8,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
  },
  helpText: {
    fontSize: 14,
  },
});
