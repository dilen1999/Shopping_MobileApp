import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

// Categories list
const categories = [
  { id: 1, name: "Popular", icon: "★" },
  { id: 2, name: "Chair", icon: "🪑" },
  { id: 3, name: "Table", icon: "🔲" },
  { id: 4, name: "Armchair", icon: "🛋️" },
  { id: 5, name: "Bed", icon: "🛏️" },
  { id: 6, name: "Lamp", icon: "💡" },
];

// Product data categorized
const categoryProductMap = {
  Popular: [
    {
      id: 1,
      name: "Black Simple Lamp",
      price: "$12.00",
      image: "https://picsum.photos/200/400",
    },
    {
      id: 2,
      name: "Minimal Stand",
      price: "$25.00",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      name: "Black Simple Lamp",
      price: "$12.00",
      image: "https://picsum.photos/200/400",
    },
    {
      id: 4,
      name: "Minimal Stand",
      price: "$25.00",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 5,
      name: "Black Simple Lamp",
      price: "$12.00",
      image: "https://picsum.photos/200/400",
    },
    {
      id: 6,
      name: "Minimal Stand",
      price: "$25.00",
      image: "https://picsum.photos/200/300",
    },
  ],
  Chair: [
    {
      id: 1,
      name: "Luxury Chair",
      price: "$30.00",
      image: "https://picsum.photos/200/301",
    },
    {
      id: 2,
      name: "Wooden Chair",
      price: "$35.00",
      image: "https://picsum.photos/200/302",
    },
    {
      id: 3,
      name: "Luxury Chair",
      price: "$30.00",
      image: "https://picsum.photos/200/301",
    },
    {
      id: 4,
      name: "Wooden Chair",
      price: "$35.00",
      image: "https://picsum.photos/200/302",
    },
    {
      id: 5,
      name: "Luxury Chair",
      price: "$30.00",
      image: "https://picsum.photos/200/301",
    },
    {
      id: 6,
      name: "Wooden Chair",
      price: "$35.00",
      image: "https://picsum.photos/200/302",
    },
  ],
  Table: [
    {
      id: 1,
      name: "Modern Table",
      price: "$40.00",
      image: "https://picsum.photos/200/303",
    },
    {
      id: 2,
      name: "Modern Table",
      price: "$40.00",
      image: "https://picsum.photos/200/303",
    },
    {
      id: 3,
      name: "Modern Table",
      price: "$40.00",
      image: "https://picsum.photos/200/303",
    },
    {
      id: 4,
      name: "Modern Table",
      price: "$40.00",
      image: "https://picsum.photos/200/303",
    },
    {
      id: 5,
      name: "Modern Table",
      price: "$40.00",
      image: "https://picsum.photos/200/303",
    },
    {
      id: 6,
      name: "Modern Table",
      price: "$40.00",
      image: "https://picsum.photos/200/303",
    },
  ],
  Armchair: [
    {
      id: 1,
      name: "Comfy Armchair",
      price: "$50.00",
      image: "https://picsum.photos/200/304",
    },
    {
      id: 2,
      name: "Comfy Armchair",
      price: "$50.00",
      image: "https://picsum.photos/200/304",
    },
    {
      id: 3,
      name: "Comfy Armchair",
      price: "$50.00",
      image: "https://picsum.photos/200/304",
    },
    {
      id: 4,
      name: "Comfy Armchair",
      price: "$50.00",
      image: "https://picsum.photos/200/304",
    },
    {
      id: 5,
      name: "Comfy Armchair",
      price: "$50.00",
      image: "https://picsum.photos/200/304",
    },
    {
      id: 6,
      name: "Comfy Armchair",
      price: "$50.00",
      image: "https://picsum.photos/200/304",
    },
  ],
  Bed: [
    {
      id: 1,
      name: "King Size Bed",
      price: "$200.00",
      image: "https://picsum.photos/200/305",
    },
    {
      id: 2,
      name: "King Size Bed",
      price: "$200.00",
      image: "https://picsum.photos/200/305",
    },
    {
      id: 3,
      name: "King Size Bed",
      price: "$200.00",
      image: "https://picsum.photos/200/305",
    },
    {
      id: 4,
      name: "King Size Bed",
      price: "$200.00",
      image: "https://picsum.photos/200/305",
    },
    {
      id: 5,
      name: "King Size Bed",
      price: "$200.00",
      image: "https://picsum.photos/200/305",
    },
    {
      id: 6,
      name: "King Size Bed",
      price: "$200.00",
      image: "https://picsum.photos/200/305",
    },
  ],
  Lamp: [
    {
      id: 1,
      name: "Stylish Lamp",
      price: "$18.00",
      image: "https://picsum.photos/200/306",
    },
    {
      id: 2,
      name: "Stylish Lamp",
      price: "$18.00",
      image: "https://picsum.photos/200/306",
    },
    {
      id: 3,
      name: "Stylish Lamp",
      price: "$18.00",
      image: "https://picsum.photos/200/306",
    },
    {
      id: 4,
      name: "Stylish Lamp",
      price: "$18.00",
      image: "https://picsum.photos/200/306",
    },
    {
      id: 5,
      name: "Stylish Lamp",
      price: "$18.00",
      image: "https://picsum.photos/200/306",
    },
    {
      id: 6,
      name: "Stylish Lamp",
      price: "$18.00",
      image: "https://picsum.photos/200/306",
    },
  ],
};

const HomeScreen = ({ navigation }) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Popular");

  const filteredProducts = categoryProductMap[selectedCategory] || [];

  // Render Category Items
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.categoryItem,
        selectedCategory === item.name && styles.activeCategoryItem,
      ]}
      onPress={() => setSelectedCategory(item.name)}
    >
      <View
        style={[
          styles.categoryIconContainer,
          selectedCategory === item.name && styles.activeCategoryIconContainer,
        ]}
      >
        <Text
          style={[
            styles.categoryIcon,
            selectedCategory === item.name && styles.activeCategoryIcon,
          ]}
        >
          {item.icon}
        </Text>
      </View>
      <Text
        style={[
          styles.categoryText,
          selectedCategory === item.name && styles.activeCategoryText,
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  // Render Product Items
  const renderProductItem = ({ item }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => navigation.navigate("Product", { product: item })}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <TouchableOpacity style={styles.bagIconContainer}>
          <Icon name="bag-outline" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
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
          <View>
            <Text style={styles.title}>Make home</Text>
            <Text style={styles.subtitle}>BEAUTIFUL</Text>
          </View>
        )}
        <TouchableOpacity onPress={() => navigation.navigate("MyCart")}>
          <Icon name="cart-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Categories List */}
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        contentContainerStyle={styles.categoryList}
      />

      {/* Products List */}
      <FlatList
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
  },
  header: {
    marginVertical: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: "#f4f4f4",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#8c8d8d",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  categoryList: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  categoryItem: {
    alignItems: "center",
    marginHorizontal: 8,
    height: 120,
  },
  categoryIconContainer: {
    width: 50,
    height: 50,
    backgroundColor: "#f4f4f4",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  activeCategoryIconContainer: {
    backgroundColor: "#333",
  },
  categoryIcon: {
    fontSize: 30,
    color: "#8c8d8d",
  },
  activeCategoryIcon: {
    color: "#fff",
  },
  categoryText: {
    fontSize: 14,
    color: "#8c8d8d",
  },
  activeCategoryText: {
    color: "#333",
    fontWeight: "bold",
  },
  productList: {
    marginTop: 10,
  },
  productCard: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 3,
    alignItems: "flex-start",
    overflow: "hidden",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 200,
  },
  productImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  bagIconContainer: {
    position: "absolute",
    bottom: 20,
    right: 10,
    backgroundColor: "#8c8d8d",
    borderRadius: 5,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  productName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    paddingHorizontal: 5,
    paddingBottom: 5,
  },
  productPrice: {
    fontSize: 12,
    fontWeight: "bold",
    color: "black",
    paddingHorizontal: 5,
    paddingBottom: 10,
  },
});

export default HomeScreen;
