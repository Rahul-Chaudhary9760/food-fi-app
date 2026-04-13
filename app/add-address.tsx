import AppHeader from "@/components/ui/AppHeader";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function AddAddressScreen() {
  const [address, setAddress] = useState("");

  const handleSaveAddress = () => {
    // next step: save in zustand store
    router.back();
  };

  return (
    <View style={styles.container}>
      <AppHeader title="Add Address" />

      <View style={styles.content}>
        <Text style={styles.label}>Delivery Address</Text>

        <TextInput
          value={address}
          onChangeText={setAddress}
          placeholder="Enter full address"
          multiline
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={handleSaveAddress}>
          <Text style={styles.buttonText}>Save Address</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: "#111",
  },
  input: {
    minHeight: 120,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 14,
    padding: 14,
    textAlignVertical: "top",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#111",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
