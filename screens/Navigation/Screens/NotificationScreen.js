import React, { useState } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const notificationsData = [
  {
    id: "1",
    title: "Your order #123456789 has been confirmed",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "New",
    image: "https://picsum.photos/60",
  },
  {
    id: "2",
    title: "Your order #123456789 has been canceled",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "New",
    image: "https://picsum.photos/60",
  },
  {
    id: "3",
    sectionHeader: "Discover hot sale furniture this week.",
    sectionDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "HOT!",
  },
  {
    id: "4",
    title: "Your order #123456789 has been shipped successfully",
    description:
      "Please confirm and rate your order to get 10% discount for next order.",
    status: "Shipped",
    image: "https://picsum.photos/60",
  },
  {
    id: "5",
    title: "Your order #123456789 has been confirmed",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "",
    image: "https://picsum.photos/60",
  },
  {
    id: "6",
    title: "Your order #123456789 has been canceled",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "",
    image: "https://picsum.photos/60",
  },
];

const NotificationScreen = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState("");

  const filteredNotifications = notificationsData.filter((item) =>
    item.title?.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderNotification = ({ item }) => {
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

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => setSearchVisible(!searchVisible)}>
          <Icon
            name="search"
            size={24}
            color="#333"
            style={styles.searchIcon}
          />
        </TouchableOpacity>

        {searchVisible ? (
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={searchText}
            onChangeText={setSearchText}
          />
        ) : (
          <View style={styles.headerWrapper}>
            <Text style={styles.header}>Notification</Text>
          </View>
        )}
      </View>

      {/* Notification List */}
      <FlatList
        data={filteredNotifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  headerWrapper: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: "#f4f4f4",
    borderRadius: 10,
    paddingHorizontal: 10,
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
