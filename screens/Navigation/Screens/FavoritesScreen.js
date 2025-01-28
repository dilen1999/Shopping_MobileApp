import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const favoritesData = [
  {
    id: "1",
    title: "Coffee Table",
    price: 50.0,
    image: "https://picsum.photos/80", // Replace with your image URL
  },
  {
    id: "2",
    title: "Coffee Chair",
    price: 20.0,
    image: "https://picsum.photos/80", // Replace with your image URL
  },
  {
    id: "3",
    title: "Minimal Stand",
    price: 25.0,
    image: "https://picsum.photos/80", // Replace with your image URL
  },
  {
    id: "4",
    title: "Minimal Desk",
    price: 50.0,
    image: "https://picsum.photos/80", // Replace with your image URL
  },
  {
    id: "5",
    title: "Minimal Lamp",
    price: 12.0,
    image: "https://picsum.photos/80", // Replace with your image URL
  },
  {
    id: "6",
    title: "Minimal Stand",
    price: 25.0,
    image: "https://picsum.photos/80", // Replace with your image URL
  },
  {
    id: "7",
    title: "Minimal Desk",
    price: 50.0,
    image: "https://picsum.photos/80", // Replace with your image URL
  },
  {
    id: "8",
    title: "Minimal Lamp",
    price: 12.0,
    image: "https://picsum.photos/80", // Replace with your image URL
  },
];

const FavoritesScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={styles.deleteButton}>
        <Icon name="close-circle-outline" size={24} color="#ff3333" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.bagIconButton}>
        <Icon name="bag-outline" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="search" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Favorites</Text>
        <TouchableOpacity>
          <Icon name="cart-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={favoritesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartText}>Add all to my cart</Text>
      </TouchableOpacity>
    </View>
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
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    position: "relative", // For absolute positioning of icons
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    color: "#555",
  },
  deleteButton: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  bagIconButton: {
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: "#cacfd2", // Dark background for contrast
    borderRadius: 5,
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  addToCartButton: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  addToCartText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default FavoritesScreen;
