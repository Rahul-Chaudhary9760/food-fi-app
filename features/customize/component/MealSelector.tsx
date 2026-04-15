import { theme } from "@/styles/theme";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  title: string;
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
};

export default function MealSelector({
  title,
  options,
  selected,
  onSelect,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.wrap}>
        {options.map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.chip, selected === item && styles.activeChip]}
            onPress={() => onSelect(item)}
          >
            <Text
              style={[styles.chipText, selected === item && styles.activeText]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.lg,
  },
  title: {
    ...theme.typography.h2,
    fontSize: 18, // exact screen fit
    marginBottom: theme.spacing.sm,
    color: theme.colors.text,
  },
  wrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: theme.spacing.sm + 2,
  },
  chip: {
    backgroundColor: theme.colors.white,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: theme.radius.sm,
  },
  activeChip: {
    backgroundColor: theme.colors.primary,
  },
  chipText: {
    color: theme.colors.text,
    fontWeight: "600",
  },
  activeText: {
    color: theme.colors.white,
  },
});
