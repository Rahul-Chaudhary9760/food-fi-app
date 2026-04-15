import { theme } from "@/styles/theme";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  value: number;
  onChange: (value: number) => void;
};

export default function QuantitySelector({ value, onChange }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tiffin Quantity</Text>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => onChange(Math.max(1, value - 1))}
        >
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>

        <Text style={styles.value}>{value}</Text>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => onChange(value + 1)}
        >
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: theme.spacing.sm + 2,
  },
  label: {
    ...theme.typography.h2,
    fontSize: 18,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.md,
  },
  btn: {
    width: 44,
    height: 44,
    borderRadius: theme.radius.sm,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: theme.colors.white,
    fontSize: 24,
    fontWeight: "700",
  },
  value: {
    ...theme.typography.h2,
    fontSize: 22,
    color: theme.colors.text,
  },
});
