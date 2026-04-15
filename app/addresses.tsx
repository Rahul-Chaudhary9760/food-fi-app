import AppHeader from "@/components/ui/AppHeader";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const addresses = [
  {
    type: "Home",
    address: "Malviya Nagar, Jaipur, Rajasthan",
  },
  {
    type: "Office",
    address: "Tonk Road, Jaipur, Rajasthan",
  },
];

export default function AddressesPage() {
  return (
    <View style={styles.container}>
      <AppHeader title="Saved Addresses" />

      <ScrollView contentContainerStyle={styles.content}>
        {addresses.map((item, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.left}>
              <Ionicons name="location-outline" size={24} color="#111" />
              <View>
                <Text style={styles.type}>{item.type}</Text>
                <Text style={styles.address}>{item.address}</Text>
              </View>
            </View>
            <TouchableOpacity>
              <Ionicons name="create-outline" size={22} color="#111" />
            </TouchableOpacity>
          </View>
        ))}

        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={20} color="#fff" />
          <Text style={styles.addText}>Add New Address</Text>
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
