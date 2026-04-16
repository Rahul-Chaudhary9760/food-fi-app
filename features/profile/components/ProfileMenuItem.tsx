import { theme } from "@/styles/theme";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../profile.styles";

type Props = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  route?: string;
  onPress?: () => void;
  showBorder?: boolean;
};

export default function ProfileMenuItem({
  icon,
  title,
  route,
  onPress,
  showBorder = true,
}: Props) {
  const handlePress = () => {
    if (onPress) {
      onPress();
      return;
    }

    if (route) {
      router.push(route as any);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.menuItem, !showBorder && { borderBottomWidth: 0 }]}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <View style={styles.menuLeft}>
        <Ionicons name={icon} size={22} color={theme.colors.text} />
        <Text style={styles.menuText}>{title}</Text>
      </View>

      <Ionicons
        name="chevron-forward"
        size={20}
        color={theme.colors.secondary}
      />
    </TouchableOpacity>
  );
}
