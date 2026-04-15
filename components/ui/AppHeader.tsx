import { theme } from "@/styles/theme";
import { usePathname, useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AppHeader({ title }: { title: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const isHome = pathname === "/home";

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/");
    }
  };

  return (
    <View style={styles.container}>
      {/* Back */}
      <TouchableOpacity
        style={styles.leftContainer}
        onPress={handleBack}
        disabled={isHome}
      >
        {!isHome ? (
          <Text style={styles.backArrow}>←</Text>
        ) : (
          <View style={styles.placeholder} />
        )}
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Avatar */}
      <Image
        source={{ uri: "https://i.pravatar.cc/100?img=12" }}
        style={styles.avatar}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: theme.colors.background,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },

  leftContainer: {
    width: 40,
    justifyContent: "center",
    alignItems: "flex-start",
  },

  backArrow: {
    fontSize: 28,
    fontWeight: "700",
    color: theme.colors.text,
  },

  placeholder: {
    width: 28,
  },

  title: {
    flex: 1,
    textAlign: "left",
    fontSize: 20,
    fontWeight: "700",
    color: theme.colors.text,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: theme.radius.lg || 20,
  },
});
