import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const categories = [
  { id: 1, name: "Popular", icon: "★" },
  { id: 2, name: "Chair", icon: "🪑" },
  { id: 3, name: "Table", icon: "🔲" },
  { id: 4, name: "Armchair", icon: "🛋️" },
  { id: 5, name: "Bed", icon: "🛏️" },
  { id: 6, name: "Lamp", icon: "💡" },
];

const products = [
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
    name: "Coffee Chair",
    price: "$20.00",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    name: "Simple Desk",
    price: "$50.00",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    name: "Coffee Chair",
    price: "$20.00",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    name: "Simple Desk",
    price: "$50.00",
    image: "https://picsum.photos/200/300",
  },
];

const HomeScreen = ({ navigation }) => {
  const renderCategoryItem = ({ item, index }) => (
    <TouchableOpacity
      style={[styles.categoryItem, index === 0 && styles.activeCategoryItem]}
    >
      <View
        style={[
          styles.categoryIconContainer,
          index === 0 && styles.activeCategoryIconContainer,
        ]}
      >
        <Text
          style={[
            styles.categoryIcon,
            index === 0 && styles.activeCategoryIcon,
          ]}
        >
          {item.icon}
        </Text>
      </View>
      <Text
        style={[styles.categoryText, index === 0 && styles.activeCategoryText]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

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
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="search" size={24} color="#333" />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>Make home</Text>
          <Text style={styles.subtitle}>BEAUTIFUL</Text>
        </View>
        <TouchableOpacity>
          <Icon name="cart-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView horizontal style={styles.categoryList}>
        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          contentContainerStyle={{ paddingHorizontal: 10 }}
        />
      </ScrollView>

      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

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
  title: {
    fontSize: 20,
    fontWeight: "semi-bold",
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
    flexDirection: "row",
    height: 150,
  },
  categoryItem: {
    alignItems: "center",
    marginHorizontal: 8,
  },
  categoryIconContainer: {
    width: 50,
    height: 50,
    backgroundColor: "#f4f4f4",
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 10,
  },
  activeCategoryIconContainer: {
    backgroundColor: "#333",
  },
  categoryIcon: {
    fontSize: 30,
    color: "#8c8d8d",
    alignItems: "center",
    justifyContent: "center",
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
    marginBottom: 5,
    textAlign: "left",
    paddingHorizontal: 5,
    paddingBottom: 5,
  },
  productPrice: {
    fontSize: 12,
    fontWeight: "bold",
    color: "black",
    textAlign: "left",
    paddingHorizontal: 5,
    paddingBottom: 10,
  },
});

export default HomeScreen;
