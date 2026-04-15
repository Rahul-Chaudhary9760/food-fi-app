import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function StickyHomeCTA() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/customize")}
      >
        <Text style={styles.text}>Customize Your Tiffin</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },
  button: {
    backgroundColor: "#111",
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
