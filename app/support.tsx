import AppHeader from "@/components/ui/AppHeader";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const supportOptions = [
  {
    icon: "call-outline",
    title: "Call Support",
    subtitle: "+91 98765 43210",
    action: () => Linking.openURL("tel:+919876543210"),
  },
  {
    icon: "mail-outline",
    title: "Email Us",
    subtitle: "support@foodfi.com",
    action: () => Linking.openURL("mailto:support@foodfi.com"),
  },
];

export default function SupportPage() {
  return (
    <View style={styles.container}>
      <AppHeader title="Help & Support" />

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>How can we help you?</Text>
        <Text style={styles.subHeading}>
          Reach out anytime for delivery, refund, subscription, or meal issues.
        </Text>

        {supportOptions.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={item.action}
          >
            <View style={styles.left}>
              <Ionicons name={item.icon as any} size={24} color="#111" />
              <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  content: {
    padding: 20,
  },
  heading: {
    fontSize: 26,
    fontWeight: "800",
    color: "#111",
    marginBottom: 8,
  },
  subHeading: {
    fontSize: 15,
    color: "#666",
    lineHeight: 22,
    marginBottom: 24,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 18,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
  },
  subtitle: {
    fontSize: 14,
    color: "#777",
    marginTop: 4,
  },
  type: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
  },
  address: {
    fontSize: 14,
    color: "#777",
    marginTop: 4,
    lineHeight: 20,
  },
  addButton: {
    marginTop: 20,
    backgroundColor: "#111",
    borderRadius: 18,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  addText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
