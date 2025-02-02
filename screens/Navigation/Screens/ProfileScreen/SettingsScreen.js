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
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Setting</Text>
      </View>

      {/* Personal Information */}
      <Text style={styles.sectionTitle}>Personal Information</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value="Bruno Pham" editable={false} />
        <TouchableOpacity>
          <Icon name="pencil-outline" size={18} color="#666" />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value="bruno203@gmail.com"
          editable={false}
        />
      </View>

      {/* Password Section */}
      <Text style={styles.sectionTitle}>Password</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value="************" editable={false} />
        <TouchableOpacity>
          <Icon name="pencil-outline" size={18} color="#666" />
        </TouchableOpacity>
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
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
  notificationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  notificationText: {
    fontSize: 14,
  },
  helpCenter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    marginTop: 10,
  },
  helpText: {
    fontSize: 14,
  },
});
