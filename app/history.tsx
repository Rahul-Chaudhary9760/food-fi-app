import AppHeader from "@/components/common/AppHeader";
import React from "react";
import { Text, View } from "react-native";

export default function HistoryPage() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <AppHeader title="Back" />
      <Text style={{ fontSize: 24, fontWeight: "700" }}>Order History</Text>
    </View>
  );
}
