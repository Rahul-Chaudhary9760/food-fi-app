import AppHeader from "@/components/ui/AppHeader";
import { useCartStore } from "@/store/cart.store";
import { router } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function CartScreen() {
  const { items, removeItem } = useCartStore();

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <ScrollView style={styles.container}>
      <AppHeader title="Customize" />
      <Text style={styles.heading}>Your Tiffin Cart 🍱</Text>
      {items.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>No tiffins added yet.</Text>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => router.push("/customize")}
          >
            <Text style={styles.primaryButtonText}>Customize Tiffin</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          {items.map((item, index) => (
            <View key={item.id} style={styles.card}>
              <Text style={styles.cardTitle}>Tiffin #{index + 1}</Text>

              <Text style={styles.itemText}>
                Veg: {item.vegetables.join(", ")}
              </Text>

              <Text style={styles.itemText}>Roti: {item.roti.join(", ")}</Text>

              <Text style={styles.itemText}>
                Raita: {item.raita.join(", ")}
              </Text>

              <Text style={styles.itemText}>
                Sweet: {item.sweets.join(", ")}
              </Text>

              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeItem(item.id)}
              >
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          ))}

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={handleCheckout}
          >
            <Text style={styles.primaryButtonText}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    color: "#111",
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 500,
  },
  emptyText: {
    fontSize: 18,
    color: "#666",
    marginBottom: 16,
    textAlign: "center",
  },
  card: {
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fafafa",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
    color: "#111",
  },
  itemText: {
    fontSize: 15,
    color: "#333",
    marginBottom: 6,
  },
  removeButton: {
    marginTop: 16,
    backgroundColor: "#ef4444",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  removeButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  primaryButton: {
    backgroundColor: "#111",
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: 16,
    alignItems: "center",
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    paddingHorizontal: 12,
  },
});
