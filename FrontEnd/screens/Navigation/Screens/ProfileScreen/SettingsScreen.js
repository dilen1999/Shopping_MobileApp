import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  ScrollView,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function SettingsScreen({ navigation }) {
  const [sales, setSales] = useState(true);
  const [newArrivals, setNewArrivals] = useState(false);
  const [deliveryStatus, setDeliveryStatus] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header (Permanent) */}
      <View style={styles.header}>
        <View style={styles.iconWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-back-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerText}>Settings</Text>
        <View style={styles.iconWrapper} /> {/* Empty View for alignment */}
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Personal Information */}
        <View style={styles.rowContainer}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <TouchableOpacity>
            <Icon name="pencil-outline" size={18} color="#666" />
          </TouchableOpacity>
        </View>

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
          <Text style={styles.inputText}>Password</Text>
          <TextInput
            style={styles.input}
            value="************"
            editable={false}
          />
        </View>

        {/* Notifications Section */}
        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.notificationContainer}>
          <Text style={styles.notificationText}>Sales</Text>
          <Switch value={sales} onValueChange={setSales} />
        </View>

        <View style={styles.notificationContainer}>
          <Text style={styles.notificationText}>New Arrivals</Text>
          <Switch value={newArrivals} onValueChange={setNewArrivals} />
        </View>

        <View style={styles.notificationContainer}>
          <Text style={styles.notificationText}>Delivery Status Changes</Text>
          <Switch value={deliveryStatus} onValueChange={setDeliveryStatus} />
        </View>

        {/* Help Center */}
        <Text style={styles.sectionTitle}>Help Center</Text>
        <TouchableOpacity style={styles.helpCenter}>
          <Text style={styles.helpText}>FAQ</Text>
          <Icon name="chevron-forward-outline" size={20} color="#666" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#fff",
    elevation: 5, // Shadow for Android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  iconWrapper: {
    width: 30, // Ensures alignment
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1, // Centers the text
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
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
    color: "#666",
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Android shadow
  },
  inputText: {
    color: "#999",
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    padding: 10,
  },
  notificationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Android shadow
  },
  notificationText: {
    fontSize: 14,
  },
  helpCenter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Android shadow
  },
  helpText: {
    fontSize: 14,
  },
});
