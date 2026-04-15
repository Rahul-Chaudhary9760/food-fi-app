import { theme } from "@/styles/theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  subtotal: number;
  delivery?: number;
};

export default function CartSummary({ subtotal, delivery = 0 }: Props) {
  const total = subtotal + delivery;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Order Summary</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Subtotal</Text>
        <Text style={styles.value}>₹{subtotal}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Delivery</Text>
        <Text style={styles.value}>₹{delivery}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.total}>Total</Text>
        <Text style={styles.total}>₹{total}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    marginTop: theme.spacing.md,
    ...theme.shadows.card,
  },
  title: {
    ...theme.typography.h2,
    fontSize: 18,
    marginBottom: theme.spacing.md,
    color: theme.colors.text,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: theme.spacing.sm,
  },
  label: {
    color: theme.colors.secondary,
  },
  value: {
    color: theme.colors.text,
    fontWeight: "600",
  },
  total: {
    fontSize: 18,
    fontWeight: "800",
    color: theme.colors.text,
  },
});
