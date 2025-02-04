import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const reviews = [
  {
    id: "1",
    title: "Coffee Table",
    price: "$50.00",
    rating: 5,
    date: "20/03/2020",
    review:
      "Nice Furniture with good delivery. The delivery time is very fast. The products look like exactly the picture in the app. Besides, the color is also the same and quality is very good despite very cheap price.",
    image: "https://picsum.photos/80",
  },
  {
    id: "2",
    title: "Coffee Table",
    price: "$50.00",
    rating: 3,
    date: "20/03/2020",
    review:
      "Nice Furniture with good delivery. The delivery time is very fast. The products look like exactly the picture in the app. Besides, the color is also the same and quality is very good despite very cheap price.",
    image: "https://picsum.photos/80",
  },
];

const renderStars = (rating) => {
  return Array.from({ length: rating }, (_, index) => (
    <Icon key={index} name="star" size={16} color="#FFD700" />
  ));
};

const MyReviewsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={24} color="#333" />
        </TouchableOpacity>

        <Text style={styles.title}>My reviews</Text>

        <TouchableOpacity onPress={() => console.log("Search clicked")}>
          <Icon name="search-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.reviewCard}>
            <View style={styles.imagePriceAlign}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View>
                <Text style={styles.productTitle}>{item.title}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
            </View>

            <View style={styles.textContainer}>
              <View style={styles.textContainerstart}>
                <Text style={styles.rating}>{renderStars(item.rating)}</Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  reviewCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
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
  imagePriceAlign: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  textContainer: {
    flex: 1,
    marginBottom: 10,
  },
  textContainerstart: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "semi-bold",
    color: "#ccc",
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
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
    marginBottom: 10,
  },
});

export default MyReviewsScreen;
