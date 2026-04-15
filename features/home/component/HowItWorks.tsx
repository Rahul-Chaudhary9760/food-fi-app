import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HowItWorks() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>How it Works</Text>
      <Text style={styles.item}>1. Choose your meal items</Text>
      <Text style={styles.item}>2. Customize roti, sabzi & add-ons</Text>
      <Text style={styles.item}>3. Confirm order in seconds</Text>
      <Text style={styles.item}>4. Fresh tiffin at your doorstep</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 18,
    marginHorizontal: 20,
    marginBottom: 18,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 12,
  },
  item: {
    fontSize: 15,
    color: "#444",
    marginBottom: 10,
  },
});
