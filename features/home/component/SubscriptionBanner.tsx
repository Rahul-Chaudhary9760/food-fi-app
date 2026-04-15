import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SubscriptionBanner() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Monthly Plan</Text>
      <Text style={styles.text}>
        Save more with 30-day tiffin subscription plans.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#111",
    borderRadius: 24,
    padding: 20,
    margin: 20,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 8,
  },
  text: {
    color: "#ddd",
    fontSize: 15,
    lineHeight: 22,
  },
});
