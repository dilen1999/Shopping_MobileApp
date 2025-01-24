import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

class GetStarted extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../assets/lamp.jpg")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay} />

        <View style={styles.content}>
          <Text style={styles.title}>MAKE YOUR</Text>
          <Text style={styles.boldTitle}>HOME BEAUTIFUL</Text>
          <Text style={styles.description}>
            The best simple place where you discover the most wonderful
            furniture and make your home beautiful
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "semi-bold",
    textAlign: "left",
    color: "#8c8d8d",
    marginBottom: 10,
  },
  boldTitle: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "left",
    marginBottom: 10,
  },
  description: {
    fontSize: 20,
    textAlign: "left",
    color: "#8c8d8d",
    marginBottom: 50,
    marginLeft: 20,
  },
  button: {
    backgroundColor: "#333",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default GetStarted;
