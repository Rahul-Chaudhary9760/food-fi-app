import { theme } from "@/styles/theme";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  total: number;
  onPress?: () => void;
};

export default function StickyFooterCTA({ total, onPress }: Props) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.priceLabel}>Total</Text>
        <Text style={styles.price}>₹{total}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.colors.white,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    padding: theme.spacing.md,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceLabel: {
    ...theme.typography.caption,
    color: theme.colors.secondary,
    fontSize: 13,
  },
  price: {
    ...theme.typography.h2,
    fontSize: 22,
    color: theme.colors.text,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: theme.radius.sm,
    ...theme.shadows.button,
  },
  buttonText: {
    color: theme.colors.white,
    fontWeight: "700",
  },
});
