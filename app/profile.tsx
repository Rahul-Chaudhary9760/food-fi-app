import AppHeader from "@/components/ui/AppHeader";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const menuItems = [
  {
    icon: "time-outline",
    title: "Order History",
    route: "/history",
  },
  {
    icon: "location-outline",
    title: "Saved Addresses",
    route: "/addresses",
  },
  {
    icon: "card-outline",
    title: "Payment Methods",
    route: "/payments",
  },
  {
    icon: "help-circle-outline",
    title: "Help & Support",
    route: "/support",
  },
];

export default function ProfilePage() {
  return (
    <View style={styles.container}>
      <AppHeader title="Profile" />

      <ScrollView contentContainerStyle={styles.content}>
        {/* User Card */}
        <View style={styles.profileCard}>
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=12" }}
            style={styles.avatar}
          />
          <Text style={styles.name}>Hackieouy</Text>
          <Text style={styles.email}>hackieouy@email.com</Text>
        </View>

        {/* Subscription */}
        <View style={styles.subscriptionCard}>
          <Text style={styles.subscriptionTitle}>Active Monthly Plan</Text>
          <Text style={styles.subscriptionText}>
            30 meals • Valid till 30 Apr • ₹1999
          </Text>
        </View>

        {/* Menu */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() => router.push(item.route as any)}
            >
              <View style={styles.menuLeft}>
                <Ionicons name={item.icon as any} size={22} color="#111" />
                <Text style={styles.menuText}>{item.title}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#999" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
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
    paddingBottom: 40,
  },
  profileCard: {
    backgroundColor: "#fff",
    borderRadius: 24,
    alignItems: "center",
    padding: 24,
    marginBottom: 20,
    elevation: 2,
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    marginBottom: 14,
  },
  name: {
    fontSize: 24,
    fontWeight: "800",
    color: "#111",
  },
  email: {
    fontSize: 15,
    color: "#777",
    marginTop: 4,
  },
  subscriptionCard: {
    backgroundColor: "#111",
    borderRadius: 22,
    padding: 20,
    marginBottom: 20,
  },
  subscriptionTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
  subscriptionText: {
    color: "#ddd",
    fontSize: 14,
    marginTop: 6,
  },
  menuContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 8,
    marginBottom: 24,
  },
  menuItem: {
    paddingHorizontal: 18,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f3f3",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  menuText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },
  logoutButton: {
    backgroundColor: "#fff",
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#eee",
  },
  logoutText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#D11A2A",
  },
});
