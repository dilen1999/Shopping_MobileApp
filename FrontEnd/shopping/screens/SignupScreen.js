import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordVisible: false,
      confirmPasswordVisible: false,
    };
  }

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      passwordVisible: !prevState.passwordVisible,
    }));
  };

  toggleConfirmPasswordVisibility = () => {
    this.setState((prevState) => ({
      confirmPasswordVisible: !prevState.confirmPasswordVisible,
    }));
  };
  render() {
    const { passwordVisible, confirmPasswordVisible } = this.state;
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
        <Text style={styles.welcome}>WELCOME</Text>

        {/* Signup Form */}
        <View style={styles.form}>
          <Text style={styles.label}>Name</Text>
          <TextInput placeholder="" style={styles.input} />
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder=""
            style={styles.input}
            keyboardType="email-address"
          />
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder=""
              style={styles.input}
              secureTextEntry={!passwordVisible}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={this.togglePasswordVisibility}
            >
              <Icon
                name={passwordVisible ? "eye" : "eye-off"}
                size={20}
                color="#333"
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.label}>Confirm Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder=""
              style={styles.input}
              secureTextEntry={!passwordVisible}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={this.togglePasswordVisibility}
            >
              <Icon
                name={passwordVisible ? "eye" : "eye-off"}
                size={20}
                color="#333"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Signup Button */}
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => this.props.navigation.navigate("Main")}
        >
          <Text style={styles.signupButtonText}>SIGN UP</Text>
        </TouchableOpacity>

        {/* Sign In Link */}
        <TouchableOpacity
          style={styles.signInLink}
          onPress={() => this.props.navigation.navigate("Login")}
        >
          <Text style={styles.signInText}>
            Already have an account?{" "}
            <Text style={styles.signInBold}>SIGN IN</Text>
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  welcome: {
    fontSize: 28,
    alignItems: "left",
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  form: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    borderRadius: 0,
    marginBottom: 20,
    backgroundColor: "transparent",
    fontSize: 16,
    color: "#333",
    paddingHorizontal: 10,
    textAlignVertical: "center",
    outlineStyle: "none",
  },
  passwordContainer: {
    position: "relative",
  },
  eyeIcon: {
    position: "absolute",
    right: 15,
    top: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  signupButton: {
    backgroundColor: "#333",
    paddingVertical: 15,
    width: "100%",
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  signupButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  signInLink: {
    marginTop: 20,
    alignItems: "center",
  },
  signInText: {
    color: "#666",
  },
  signInBold: {
    fontWeight: "bold",
    color: "#333",
  },
});

export default SignupScreen;
