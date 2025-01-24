import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordVisible: false, // State to toggle password visibility
    };
  }

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      passwordVisible: !prevState.passwordVisible,
    }));
  };

  render() {
    const { passwordVisible } = this.state;

    return (
      <View style={styles.container}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/loginheader.png")}
            style={styles.logo}
          />
        </View>

        {/* Welcome Text */}
        <View style={styles.welcomeContainer}>
          <Text style={styles.greeting}>Hello !</Text>
          <Text style={styles.welcome}>WELCOME BACK</Text>
        </View>

        {/* Login Form */}
        <View style={styles.form}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="george@gmail.com"
            style={styles.input}
            keyboardType="email-address"
          />
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="123A@$#%	"
              style={styles.input}
              // secureTextEntry={true}
              secureTextEntry={!passwordVisible}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={this.togglePasswordVisibility} // Toggle password visibility on press
            >
              <Text>{passwordVisible ? "🙈" : "👁️"}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password</Text>
          </TouchableOpacity>
        </View>

        {/* Buttons */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => alert("Login pressed")}
        >
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => this.props.navigation.navigate("Signup")}
        >
          <Text style={styles.signupButtonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
  },
  logoContainer: {
    marginBottom: 20,
    padding: 20,
    width: "100%",
  },
  logo: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
    marginBottom: 20,
  },
  welcomeContainer: {
    alignItems: "left",
    width: "100%",
  },
  greeting: {
    fontSize: 24,
    fontWeight: "semi-bold",
    color: "#8c8d8d",
  },
  welcome: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  form: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  input: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    borderRadius: 0,
    marginBottom: 20,
    backgroundColor: "transparent",
    fontSize: 16,
    color: "#333",
    paddingHorizontal: 10,
    textAlignVertical: "center", // Center the text vertically to prevent yellow border
    outlineStyle: "none", // Disable focus outline for web compatibility
  },

  passwordContainer: {
    position: "relative",
  },
  eyeIcon: {
    position: "absolute",
    right: 15,
    top: 15,
  },
  forgotPassword: {
    textAlign: "right",
    color: "#666",
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#333",
    paddingVertical: 15,
    width: "100%",
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  signupButton: {
    borderWidth: 1,
    borderColor: "#333",
    paddingVertical: 15,
    width: "100%",
    borderRadius: 5,
    alignItems: "center",
  },
  signupButtonText: {
    color: "#333",
    fontSize: 16,
  },
});

export default LoginScreen;
