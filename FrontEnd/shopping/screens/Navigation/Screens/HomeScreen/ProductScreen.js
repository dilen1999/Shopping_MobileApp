import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const ProductScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  const handleAddToCart = () => {
    navigation.navigate("MyCart", {
      cartItem: { ...product, quantity },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        {/* Back Button */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Icon name="chevron-back-outline" size={24} color="#333" />
        </TouchableOpacity>

        {/* Product Image */}
        <View style={styles.productImageContainer}>
          <Image source={{ uri: product.image }} style={styles.productImage} />
        </View>

        {/* Color Options */}
        <View style={styles.colorOptions}>
          <View style={styles.colorCircle}></View>
          <View
            style={[styles.colorCircle, { backgroundColor: "#c5c5c5" }]}
          ></View>
          <View
            style={[styles.colorCircle, { backgroundColor: "#f1b900" }]}
          ></View>
        </View>
      </View>

      <View style={styles.paddingContainer}>
        {/* Product Info */}
        <Text style={styles.productName}>{product.name}</Text>

        {/* Price and Counter Row */}
        <View style={styles.priceRow}>
          <Text style={styles.productPrice}>{product.price}</Text>
          <View style={styles.counter}>
            <TouchableOpacity onPress={decrement} style={styles.counterButton}>
              <Icon name="remove-outline" size={20} color="black" />
            </TouchableOpacity>
            <Text style={styles.counterText}>
              {quantity.toString().padStart(2, "0")}
            </Text>
            <TouchableOpacity onPress={increment} style={styles.counterButton}>
              <Icon name="add-outline" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Reviews Row */}
        <View style={styles.reviewRow}>
          {/* Single Gold Star */}
          <Icon
            name="star"
            size={20}
            color="#f1b900"
            style={styles.singleStar}
          />
          <Text style={styles.starPoint}>4.5</Text>
          {/* Review Text */}
          <Text style={styles.reviewText}>
            {product.rating} ({product.reviews}50 reviews)
          </Text>
        </View>

        {/* Description */}
        <Text style={styles.productDescription}>
          Minimal Stand is made of natural wood. The design is very simple and
          minimal. This is truly one of the best furniture items for any family.
          With 3 different colors, you can easily select the best match for your
          home.
        </Text>

        {/* Action Row */}
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.saveButton}>
            <Icon name="bookmark-outline" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={handleAddToCart}
          >
            <Text style={styles.addToCartText}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // padding: 20,
  },
  paddingContainer: {
    padding: 20,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 15,
    zIndex: 10,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  productImageContainer: {
    borderBottomLeftRadius: 50,
    width: "100%",
    alignItem: "left",
    flex: "row",
    marginLeft: 20,
    justifyContent: "end",
  },
  productImage: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
    marginLeft: 20,
    borderBottomLeftRadius: 50,
  },
  colorOptions: {
    position: "absolute",
    top: 100,
    left: 15,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    padding: 10,
    borderRadius: 20,
  },

  colorCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#333",
    marginVertical: 10,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "left",
    marginVertical: 10,
  },
  productPrice: {
    fontSize: 24,
    fontWeight: "bold",
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  counterButton: {
    padding: 10,
    backgroundColor: "#f4f4f4",
    borderRadius: 10,
  },
  counterText: {
    fontSize: 16,
    color: "black",
    paddingHorizontal: 10,
  },
  reviewRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  singleStar: {
    marginRight: 5, // Add spacing between the star and the text
  },
  starPoint: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5,
  },
  reviewText: {
    fontSize: 16,
    color: "#8c8d8d",
  },
  reviewText: {
    fontSize: 16,
    color: "#8c8d8d",
  },
  productDescription: {
    fontSize: 16,
    color: "#8c8d8d",
    marginBottom: 20,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: "#f4f4f4",
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  addToCartButton: {
    backgroundColor: "#333",
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  addToCartText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProductScreen;
