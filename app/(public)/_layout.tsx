import AppHeader from "@/components/ui/AppHeader";
import { Stack } from "expo-router";
import React from "react";

export default function PublicLayout() {
  return (
    <Stack
      screenOptions={{
        header: ({ options }) => (
          <AppHeader title={(options.title as string) || "Food-fi"} />
        ),
      }}
    >
      <Stack.Screen
        name="home"
        options={{ title: "Home", headerBackVisible: false }}
      />

      <Stack.Screen name="customize" options={{ title: "Customize" }} />
      <Stack.Screen name="cart" options={{ title: "Cart" }} />
      <Stack.Screen name="profile" options={{ title: "Profile" }} />
      <Stack.Screen name="help" options={{ title: "Help & Support" }} />
      <Stack.Screen name="saved-address" options={{ title: "Saved Address" }} />
      <Stack.Screen name="history" options={{ title: "Order History" }} />
    </Stack>
  );
}
