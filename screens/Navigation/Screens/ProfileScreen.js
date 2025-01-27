import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export class ProfileScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Text style={styles.icon}>🔍</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Profile</Text>
          <TouchableOpacity>
            <Text style={styles.icon}>🔄</Text>
          </TouchableOpacity>
        </View>

        {/* Profile Information */}
        <View style={styles.profileContainer}>
          <Image
            // source={require("../../assets/profile.png")}
            style={styles.profileImage}
          />
          <View style={styles.profileText}>
            <Text style={styles.profileName}>Bruno Pham</Text>
            <Text style={styles.profileEmail}>bruno203@gmail.com</Text>
          </View>
        </View>

        {/* Profile Options */}
        <View style={styles.menuContainer}>
          {this.renderMenuItem("My orders", "Already have 10 orders")}
          {this.renderMenuItem("Shipping Addresses", "03 Addresses")}
          {this.renderMenuItem("Payment Method", "You have 2 cards")}
          {this.renderMenuItem("My reviews", "Reviews for 5 items")}
          {this.renderMenuItem(
            "Setting",
            "Notification, Password, FAQ, Contact"
          )}
        </View>
      </ScrollView>
    );
  }

  renderMenuItem(title, description) {
    return (
      <TouchableOpacity style={styles.menuItem}>
        <View style={styles.menuText}>
          <Text style={styles.menuTitle}>{title}</Text>
          <Text style={styles.menuDescription}>{description}</Text>
        </View>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>
    );
  }
}

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
  icon: {
    fontSize: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
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
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
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
  },
  menuDescription: {
    fontSize: 14,
    color: "#555",
  },
  arrow: {
    fontSize: 18,
    color: "#aaa",
  },
});

export default ProfileScreen;
