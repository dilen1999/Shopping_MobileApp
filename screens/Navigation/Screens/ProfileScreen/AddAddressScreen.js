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

      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Zipcode (Postal Code)</Text>
        <TextInput
          style={styles.input}
          placeholder="pham chong thanh"
          placeholderTextColor="#999"
          value={zipcode}
          onChangeText={setZipcode}
        />
      </View>

      {/* Country Picker */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Country</Text>
        <View style={styles.pickerContainer}>
          <RNPickerSelect
            onValueChange={(value) => setCountry(value)}
            items={[
              { label: "United States", value: "USA" },
              { label: "Canada", value: "Canada" },
              { label: "United Kingdom", value: "UK" },
            ]}
            placeholder={{ label: "Select Country", value: null }}
            style={{
              inputIOS: styles.pickerInput,
              inputAndroid: styles.pickerInput,
            }}
            useNativeAndroidPickerStyle={false}
            Icon={() => {
              return (
                <Icon
                  name="chevron-down"
                  size={20}
                  color="#333"
                  style={styles.pickerIcon}
                />
              );
            }}
          />
        </View>
      </View>

      {/* City Picker */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={city}
          onValueChange={(itemValue) => setCity(itemValue)}
        >
          <Picker.Item label="New York" value="New York" />
          <Picker.Item label="Los Angeles" value="Los Angeles" />
          <Picker.Item label="Chicago" value="Chicago" />
        </Picker>
      </View>

      {/* District Picker */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={district}
          onValueChange={(itemValue) => setDistrict(itemValue)}
        >
          <Picker.Item label="Select District" value="" />
          <Picker.Item label="Manhattan" value="Manhattan" />
          <Picker.Item label="Brooklyn" value="Brooklyn" />
        </Picker>
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>SAVE ADDRESS</Text>
      </TouchableOpacity>
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
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    marginBottom: 10,
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
  pickerInput: {
    fontSize: 16,
    color: "#333",
    paddingRight: 30, // For space between text and arrow
  },
  pickerIcon: {
    position: "absolute",
    right: 10,
    top: "50%",
  },
});
