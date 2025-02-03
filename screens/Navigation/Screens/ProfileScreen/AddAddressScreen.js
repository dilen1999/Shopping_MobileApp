import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Picker,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import Icon from "react-native-vector-icons/Ionicons";

export default function AddAddressScreen({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("New York"); // Default value
  const [district, setDistrict] = useState("");

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Add shipping address</Text>
      </View>

      {/* Input Fields */}
      {/* <View style={styles.input}>
        <Text style={styles.inputText}>Full name</Text>
        <TextInput
          // style={styles.input}
          placeholder="Ex: Bruno Pham"
          placeholderTextColor="#999"
          value={fullName}
          onChangeText={setFullName}
        />
      </View> */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Full name</Text>
        <TextInput
          placeholder="Ex: Bruno Pham"
          placeholderTextColor="#999"
          value={fullName}
          onChangeText={setFullName}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 25 Robert Latouche Street"
          placeholderTextColor="#999"
          value={address}
          onChangeText={setAddress}
        />
      </View>

      <View style={styles.inputContainer1}>
        <Text style={styles.inputText1}>Zipcode (Postal Code)</Text>
        <TextInput
          style={styles.input1}
          placeholder="pham chong thanh"
          placeholderTextColor="#999"
          value={zipcode}
          onChangeText={setZipcode}
        />
      </View>

      {/* Country Picker */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Country</Text>
        <Picker
          selectedValue={country}
          onValueChange={(itemValue) => setCountry(itemValue)}
          style={[styles.pickerInput, { width: "80%" }]}
        >
          <Picker.Item label="Select Country" value={null} />
          <Picker.Item label="United States" value="USA" />
          <Picker.Item label="Canada" value="Canada" />
          <Picker.Item label="United Kingdom" value="UK" />
        </Picker>
      </View>

      {/* City Picker */}
      <View style={styles.inputContainer1}>
        <Text style={styles.inputText1}>City</Text>

        <Picker
          selectedValue={city}
          onValueChange={(itemValue) => setCity(itemValue)}
          style={[styles.pickerInput1, { width: "80%" }]} // ✅ Ensures width consistency
        >
          <Picker.Item label="New York" value="New York" />
          <Picker.Item label="Los Angeles" value="Los Angeles" />
          <Picker.Item label="Chicago" value="Chicago" />
        </Picker>
      </View>

      {/* District Picker */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>District</Text>

        <Picker
          selectedValue={district}
          onValueChange={(itemValue) => setDistrict(itemValue)}
          style={[styles.pickerInput, { width: "80%" }]} // ✅ Same fix applied
        >
          <Picker.Item label="Select District" value="" />
          <Picker.Item label="Manhattan" value="Manhattan" />
          <Picker.Item label="Brooklyn" value="Brooklyn" />
        </Picker>
      </View>

      {/* Save Button */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.saveButtonText}>SAVE ADDRESS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    textAlign: "center",
    flex: 1,
  },
  input: {
    backgroundColor: "#f5f5f5",
    // padding: 15,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 10,
    outlineStyle: "none",
    borderColor: "transparent",
    borderWidth: 0,
  },
  inputContainer: {
    marginBottom: 20,
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: "#f5f5f5",
    flexDirection: "column",
  },
  inputContainer1: {
    marginBottom: 20,
    padding: 5,
    width: "100%",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    flexDirection: "column",
    borderColor: "#ccc",
    borderWidth: 1, // Add this line
    borderRadius: 8,
  },
  inputText1: {
    color: "#ccc",
    marginBottom: 10,
  },
  input1: {
    backgroundColor: "#fff",
    // padding: 15,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 10,
    outlineStyle: "none",
    borderColor: "transparent",
    borderWidth: 0,
  },
  //   input: {
  //     height: 50,
  //     borderBottomWidth: 1,
  //     borderBottomColor: "#ddd",
  //     marginBottom: 20,
  //     backgroundColor: "transparent",
  //     fontSize: 16,
  //     color: "#333",
  //     paddingHorizontal: 10,
  //     textAlignVertical: "center",

  //     /* ✅ Remove focus border */
  //     outlineStyle: "none",
  //     borderWidth: 0,
  //     borderColor: "transparent",

  //     /* ✅ Add this for React Native Web */
  //     boxShadow: "none",
  //   },
  inputText: {
    color: "#999",
    marginBottom: 10,
  },
  pickerContainer: {
    backgroundColor: "transparent",
    backgroundColor: "#ccc",
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: "column",
    borderWidth: 0,
  },
  pickerWrapper: {
    borderRadius: 8,
    padding: 5,
    marginTop: 5,
  },
  footer: {
    position: "absolute",
    bottom: 20,
    left: 16,
    right: 16,
  },
  saveButton: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  pickerContainer: {
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  // pickerInput: {
  //   fontSize: 16,
  //   color: "#ccc",
  //   paddingRight: 30, // For space between text and arrow
  // },
  pickerInput: {
    fontSize: 16,
    color: "grey", // ✅ Set text color to grey
    paddingVertical: 10,
    // paddingHorizontal: 12,
    backgroundColor: "transparent", // Optional: Set background color
    borderRadius: 8,
    outlineStyle: "none",
    borderWidth: 0,
    width: "100%",
  },
  pickerInput1: {
    fontSize: 16,
    color: "grey", // ✅ Set text color to grey
    paddingVertical: 10,
    // paddingHorizontal: 12,
    backgroundColor: "transparent", // Optional: Set background color
    borderRadius: 8,
    outlineStyle: "none",
    borderWidth: 0,
    width: "100%",
  },
  pickerIcon: {
    position: "absolute",
    right: 10,
    top: "50%",
  },
});
