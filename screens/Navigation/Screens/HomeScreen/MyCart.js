import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const MyCart = ({ navigation }) => {
  const cartData = [
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

  const [quantities, setQuantities] = useState(cartData.map(() => 1));
  const [promoCode, setPromoCode] = useState("");
  const [total, setTotal] = useState(
    cartData.reduce((acc, item) => acc + item.price, 0)
  );

  const increment = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
    updateTotal(newQuantities);
  };

  const decrement = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
    }
    setQuantities(newQuantities);
    updateTotal(newQuantities);
  };

  const updateTotal = (quantities) => {
    const newTotal = cartData.reduce(
      (acc, item, index) => acc + item.price * quantities[index],
      0
    );
    setTotal(newTotal);
  };

  return (
    <View style={styles.container}>
      {/* Header Row */}
      <View style={styles.headerRow}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Icon name="chevron-back-outline" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>My Cart</Text>
      </View>

      {/* Cart Items */}
      <FlatList
        data={cartData}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.cartItem}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.title}</Text>
              <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
              <View style={styles.counter}>
                <TouchableOpacity
                  onPress={() => decrement(index)}
                  style={styles.counterButton}
                >
                  <Icon name="remove-outline" size={20} color="black" />
                </TouchableOpacity>
                <Text style={styles.counterText}>
                  {quantities[index].toString().padStart(2, "0")}
                </Text>
                <TouchableOpacity
                  onPress={() => increment(index)}
                  style={styles.counterButton}
                >
                  <Icon name="add-outline" size={20} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />

      {/* Promo Code and Total Section */}
      <View style={styles.promoCodeContainer}>
        <TextInput
          style={styles.promoInput}
          placeholder="Enter your promo code"
          value={promoCode}
          onChangeText={setPromoCode}
        />
        <TouchableOpacity style={styles.promoButton}>
          <Icon name="arrow-forward-outline" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total:</Text>
        <Text style={styles.totalAmount}>${total.toFixed(2)}</Text>
      </View>

      {/* Checkout Button */}
      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={() => navigation.navigate("Checkout")}
      >
        <Text style={styles.checkoutText}>Check out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  cartItem: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
  },
  itemImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 16,
    color: "#666",
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
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
  promoCodeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 5,
  },
  promoInput: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: "#333",
    borderRadius: 10,
  },
  promoButton: {
    padding: 10,
    backgroundColor: "#333",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  checkoutButton: {
    backgroundColor: "#000",
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  checkoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MyCart;
