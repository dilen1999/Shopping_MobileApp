import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const initialFavorites = [
  {
    id: "1",
    title: "Coffee Table",
    price: 50.0,
    image: "https://picsum.photos/80",
  },
  {
    id: "2",
    title: "Coffee Chair",
    price: 20.0,
    image: "https://picsum.photos/80",
  },
  {
    id: "3",
    title: "Minimal Stand",
    price: 25.0,
    image: "https://picsum.photos/80",
  },
  {
    id: "4",
    title: "Minimal Desk",
    price: 50.0,
    image: "https://picsum.photos/80",
  },
  {
    id: "5",
    title: "Minimal Lamp",
    price: 12.0,
    image: "https://picsum.photos/80",
  },
  {
    id: "6",
    title: "Minimal Stand",
    price: 25.0,
    image: "https://picsum.photos/80",
  },
];

const FavoritesScreen = ({ navigation }) => {
  const [favorites, setFavorites] = useState(initialFavorites);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState("");

  // Remove item from favorites
  const removeItem = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item) => item.id !== id)
    );
  };

  // Add item to MyCart
  const addToCart = (item) => {
    navigation.navigate("MyCart", { newCartItem: item });
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => removeItem(item.id)}
      >
        <Icon name="close-circle-outline" size={24} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bagIconButton}
        onPress={() => addToCart(item)}
      >
        <Icon name="bag-outline" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
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
          <Text style={styles.headerTitle}>Favorites</Text>
        )}
        <TouchableOpacity onPress={() => navigation.navigate("MyCart")}>
          <Icon name="cart-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={favorites}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: "#f4f4f4",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  headerTitle: { fontSize: 20, fontWeight: "bold", color: "#333" },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    position: "relative",
  },
  image: { width: 80, height: 80, borderRadius: 10, marginRight: 10 },
  details: { flex: 1, justifyContent: "flex-start" },
  title: { fontSize: 16, color: "#555" },
  price: { fontSize: 16, fontWeight: "bold" },
  deleteButton: { position: "absolute", top: 5, right: 5 },
  bagIconButton: {
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: "#cacfd2",
    borderRadius: 5,
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
