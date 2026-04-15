import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const features = [
  { icon: "restaurant-outline", title: "Fresh Meals" },
  { icon: "flash-outline", title: "Fast Delivery" },
  { icon: "leaf-outline", title: "Healthy Choices" },
];

export default function FeatureSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Why choose Food-fi?</Text>

      {features.map((item, index) => (
        <View key={index} style={styles.card}>
          <Ionicons name={item.icon as any} size={24} color="#111" />
          <Text style={styles.text}>{item.title}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 18,
    marginBottom: 12,
    gap: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});
