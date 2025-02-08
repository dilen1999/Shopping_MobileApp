import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import profileImage from "../../../assets/profile.png";
import Icon from "react-native-vector-icons/Ionicons";

const ProfileScreen = ({ navigation }) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState("");

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setSearchVisible(!searchVisible)}>
          <Icon name="search" size={24} color="#333" />
        </TouchableOpacity>
        {searchVisible ? (
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={searchText}
            onChangeText={setSearchText}
          />
        ) : (
          <Text style={styles.title}>Profile</Text>
        )}
        <TouchableOpacity onPress={() => navigation.navigate("GetStarted")}>
          <Icon name="log-out-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Profile Information */}
      <View style={styles.profileContainer}>
        <Image source={profileImage} style={styles.profileImage} />
        <View style={styles.profileText}>
          <Text style={styles.profileName}>Bruno Pham</Text>
          <Text style={styles.profileEmail}>bruno203@gmail.com</Text>
        </View>
      </View>

      {/* Profile Options */}
      {[
        {
          title: "My orders",
          description: "Already have 10 orders",
          screen: "MyOrders",
        },
        {
          title: "Shipping Addresses",
          description: "03 Addresses",
          screen: "ShippingAddress",
        },
        {
          title: "Payment Method",
          description: "You have 2 cards",
          screen: "PaymentMethod",
        },
        {
          title: "My reviews",
          description: "Reviews for 5 items",
          screen: "MyReview",
        },
        {
          title: "Setting",
          description: "Notification, Password, FAQ, Contact",
          screen: "Setting",
        },
      ].map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.menuContainer, styles.menuItem]}
          onPress={() => navigation.navigate(item.screen)}
        >
          <View style={styles.menuText}>
            <Text style={styles.menuTitle}>{item.title}</Text>
            <Text style={styles.menuDescription}>{item.description}</Text>
          </View>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: "#f4f4f4",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  profileText: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profileEmail: {
    fontSize: 14,
    color: "#555",
  },
  menuContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  menuText: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  menuDescription: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  arrow: {
    fontSize: 24,
    color: "#aaa",
  },
});

export default ProfileScreen;
