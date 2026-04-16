import { theme } from "@/styles/theme";
import { Ionicons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";
import React from "react";

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AppHeader({ title }: { title: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const cartCount = 3; //TODO:Zustand cart count
  const isHome = pathname === "/home";

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/");
    }
  };
  const handleCartPress = () => {
    if (pathname !== "/cart") {
      router.replace("/cart");
    }
  };
  const handleProfilePress = () => {
    if (pathname !== "/profile") {
      router.push("/profile");
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
      <View style={styles.rightContainer}>
        {/* Cart */}
        <TouchableOpacity style={styles.cartWrapper} onPress={handleCartPress}>
          <Ionicons name="cart-outline" size={26} color={theme.colors.text} />

          {cartCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{cartCount}</Text>
            </View>
          )}
        </TouchableOpacity>

        {/* Avatar */}
        <TouchableOpacity onPress={handleProfilePress}>
          <Image
            source={{ uri: "https://i.pravatar.cc/100?img=12" }}
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>
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
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.md,
  },
  badgeText: {
    color: theme.colors.white,
    fontSize: 10,
    fontWeight: "700",
  },
  badge: {
    position: "absolute",
    top: -6,
    right: -8,
    backgroundColor: theme.colors.danger,
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 4,
  },
  cartWrapper: {
    position: "relative",
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
