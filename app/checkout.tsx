import AppHeader from "@/components/common/AppHeader";
import { useCartStore } from "@/store/cart.store";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TIFFIN_PRICE = 69;

export default function CheckoutScreen() {
  const { items } = useCartStore();

  const totalTiffins = items.length;
  const totalPrice = totalTiffins * TIFFIN_PRICE;

  const savedAddresses = [
    "Home - Vaishali Nagar, Jaipur",
    "Office - Malviya Nagar, Jaipur",
  ];

  return (
    <View style={styles.container}>
      <AppHeader title="Cart" />
      <Text style={styles.heading}>Checkout</Text>

      <View style={styles.summaryCard}>
        <Text style={styles.summaryText}>Total Tiffins: {totalTiffins}</Text>

        <Text style={styles.summaryText}>Total Price: ₹{totalPrice}</Text>
      </View>

      <TouchableOpacity
        style={styles.addAddressButton}
        onPress={() => router.push("/add-address")}
      >
        <Text style={styles.addAddressText}>+ Add Address</Text>
      </TouchableOpacity>

      {savedAddresses.map((address, index) => (
        <TouchableOpacity key={index} style={styles.addressCard}>
          <Text style={styles.addressText}>{address}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  heading: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
    color: "#111",
  },
  summaryCard: {
    backgroundColor: "#fafafa",
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },
  summaryText: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: "#111",
  },
  addressHeading: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 16,
    color: "#111",
  },
  addressCard: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
  },
  addressText: {
    fontSize: 15,
    color: "#333",
  },
  addAddressButton: {
    borderWidth: 1,
    borderColor: "#111",
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 20,
  },
  addAddressText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111",
  },
});
