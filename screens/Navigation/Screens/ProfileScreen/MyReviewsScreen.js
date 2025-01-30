import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const reviews = [
  {
    id: "1",
    title: "Coffee Table",
    price: "$50.00",
    rating: 5,
    date: "20/03/2020",
    review:
      "Nice Furniture with good delivery. The delivery time is very fast. The products look like exactly the picture in the app. Besides, the color is also the same and quality is very good despite very cheap price.",
    image: "https://via.placeholder.com/80", // Replace with actual image URL
  },
  {
    id: "2",
    title: "Coffee Table",
    price: "$50.00",
    rating: 5,
    date: "20/03/2020",
    review:
      "Nice Furniture with good delivery. The delivery time is very fast. The products look like exactly the picture in the app. Besides, the color is also the same and quality is very good despite very cheap price.",
    image: "https://via.placeholder.com/80",
  },
];

const MyReviewsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My reviews</Text>
      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.reviewCard}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.price}>{item.price}</Text>
              <Text style={styles.rating}>⭐ {item.rating}</Text>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.review}>{item.review}</Text>
            </View>
          </View>
        )}
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  reviewCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  rating: {
    fontSize: 14,
    color: "#FFD700",
  },
  date: {
    fontSize: 12,
    color: "#777",
  },
  review: {
    fontSize: 14,
    color: "#555",
  },
});

export default MyReviewsScreen;
