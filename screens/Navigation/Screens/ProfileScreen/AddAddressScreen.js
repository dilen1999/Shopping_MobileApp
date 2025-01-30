import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Picker,
} from "react-native";
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
      <TextInput
        style={styles.input}
        placeholder="Ex: Bruno Pham"
        placeholderTextColor="#999"
        value={fullName}
        onChangeText={setFullName}
      />

      <TextInput
        style={styles.input}
        placeholder="Ex: 25 Robert Latouche Street"
        placeholderTextColor="#999"
        value={address}
        onChangeText={setAddress}
      />

      <TextInput
        style={styles.input}
        placeholder="Zipcode (Postal Code)"
        placeholderTextColor="#999"
        value={zipcode}
        onChangeText={setZipcode}
      />

      {/* Country Picker */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={country}
          onValueChange={(itemValue) => setCountry(itemValue)}
        >
          <Picker.Item label="Select Country" value="" />
          <Picker.Item label="United States" value="USA" />
          <Picker.Item label="Canada" value="Canada" />
        </Picker>
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
  },
  input: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 8,
    fontSize: 16,
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
});
