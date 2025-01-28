import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export class ProfileScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Icon name="search" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.title}>Profile</Text>
          <TouchableOpacity>
            <Icon name="log-out-outline" size={24} color="#333" />
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
        <View>
          <TouchableOpacity
            style={[styles.menuContainer, styles.menuItem]}
            onPress={() => this.props.navigation.navigate("MyOrders")}
          >
            <View style={styles.menuText}>
              <Text style={styles.menuTitle}>My orders</Text>
              <Text style={styles.menuDescription}>Already have 10 orders</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.menuContainer, styles.menuItem]}
            onPress={() => this.props.navigation.navigate("ShippingAddress")}
          >
            <View style={styles.menuText}>
              <Text style={styles.menuTitle}>Shipping Addresses</Text>
              <Text style={styles.menuDescription}>03 Addresses</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.menuContainer, styles.menuItem]}
            onPress={() => this.handlePress("PaymentMethod")}
          >
            <View style={styles.menuText}>
              <Text style={styles.menuTitle}>Payment Method</Text>
              <Text style={styles.menuDescription}>You have 2 cards</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.menuContainer, styles.menuItem]}
            onPress={() => this.handlePress("MyReviews")}
          >
            <View style={styles.menuText}>
              <Text style={styles.menuTitle}>My reviews</Text>
              <Text style={styles.menuDescription}>Reviews for 5 items</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.menuContainer, styles.menuItem]}
            onPress={() => this.handlePress("Settings")}
          >
            <View style={styles.menuText}>
              <Text style={styles.menuTitle}>Setting</Text>
              <Text style={styles.menuDescription}>
                Notification, Password, FAQ, Contact
              </Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
