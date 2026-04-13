import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type AppHeaderProps = {
  title: string;
  showBack?: boolean;
};

export default function AppHeader({ title, showBack = true }: AppHeaderProps) {
  return (
    <View style={styles.container}>
      {/* Left Back Button */}
      <TouchableOpacity
        style={styles.leftContainer}
        onPress={() => router.back()}
        disabled={!showBack}
      >
        {showBack ? (
          <Text style={styles.backArrow}>←</Text>
        ) : (
          <View style={styles.placeholder} />
        )}
      </TouchableOpacity>

      {/* Center Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Right Avatar */}
      <Image
        source={{
          uri: "https://i.pravatar.cc/100?img=12",
        }}
        style={styles.avatar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  leftContainer: {
    width: 40,
    justifyContent: "center",
  },
  backArrow: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111",
  },
  placeholder: {
    width: 28,
  },
  title: {
    flex: 1,
    textAlign: "left",
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
