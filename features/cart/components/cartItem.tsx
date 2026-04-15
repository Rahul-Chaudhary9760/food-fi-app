import { theme } from "@/styles/theme";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  item: {
    id: string;
    title: string;
    roti: string;
    sabzi: string;
    dal: string;
    quantity: number;
    totalPrice: number;
  };
  onRemove?: () => void;
};

export default function CartItem({ item, onRemove }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.title}>{item.title}</Text>
        <TouchableOpacity onPress={onRemove}>
          <Text style={styles.remove}>Remove</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.meta}>🍞 {item.roti}</Text>
      <Text style={styles.meta}>🥘 {item.sabzi}</Text>
      <Text style={styles.meta}>🥣 {item.dal}</Text>
      <Text style={styles.meta}>📦 Qty: {item.quantity}</Text>

      <Text style={styles.price}>₹{item.totalPrice}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    ...theme.shadows.card,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: theme.spacing.sm,
  },
  title: {
    ...theme.typography.h2,
    fontSize: 18,
    color: theme.colors.text,
  },
  remove: {
    color: theme.colors.danger,
    fontWeight: "600",
  },
  meta: {
    color: theme.colors.secondary,
    marginBottom: 6,
  },
  price: {
    marginTop: theme.spacing.sm,
    fontSize: 20,
    fontWeight: "800",
    color: theme.colors.text,
  },
});
