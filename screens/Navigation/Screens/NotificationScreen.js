import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const notificationsData = [
  {
    id: "1",
    title: "Your order #123456789 has been confirmed",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium.",
    status: "New",
    image: "https://picsum.photos/60", // Replace with your image URL
  },
  {
    id: "2",
    title: "Your order #123456789 has been canceled",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium.",
    status: "New",
    image: "https://picsum.photos/60", // Replace with your image URL
  },
  {
    id: "3",
    sectionHeader: "Discover hot sale furnitures this week.",
    sectionDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium.",
    status: "HOT!",
  },
  {
    id: "4",
    title: "Your order #123456789 has been shipped successfully",
    description:
      "Please help to confirm and rate your order to get 10% discount for next order.",
    status: "Shipped",
    image: "https://picsum.photos/60", // Replace with your image URL
  },
  {
    id: "5",
    title: "Your order #123456789 has been confirmed",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium.",
    status: "",
    image: "https://picsum.photos/60", // Replace with your image URL
  },
  {
    id: "6",
    title: "Your order #123456789 has been canceled",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium.",
    status: "",
    image: "https://picsum.photos/60", // Replace with your image URL
  },
];

export class NotificationScreen extends Component {
  renderNotification = ({ item }) => {
    if (item.sectionHeader) {
      return (
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{item.sectionHeader}</Text>
          <Text style={styles.sectionDescription}>
            {item.sectionDescription}
          </Text>
          <Text style={styles.hotLabel}>{item.status}</Text>
        </View>
      );
    }

    return (
      <View style={styles.notificationContainer}>
        {item.image && (
          <Image
            source={{ uri: item.image }}
            style={styles.notificationImage}
          />
        )}
        <View style={styles.textContainer}>
          <Text style={styles.notificationTitle}>{item.title}</Text>
          <Text style={styles.notificationDescription}>{item.description}</Text>
        </View>
        {item.status === "New" && (
          <Text style={styles.newLabel}>{item.status}</Text>
        )}
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Notification</Text>
        <FlatList
          data={notificationsData}
          renderItem={this.renderNotification}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      </View>
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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  listContainer: {
    paddingBottom: 16,
  },
  notificationContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  notificationImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  notificationDescription: {
    fontSize: 14,
    color: "#555",
  },
  newLabel: {
    color: "green",
    fontWeight: "bold",
    fontSize: 12,
  },
  sectionHeader: {
    backgroundColor: "#fff3e0",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  sectionDescription: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  hotLabel: {
    color: "red",
    fontWeight: "bold",
    fontSize: 12,
  },
});

export default NotificationScreen;
