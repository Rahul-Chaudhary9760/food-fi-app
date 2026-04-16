import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import ProfileMenuItem from "./components/ProfileMenuItem";
import SubscriptionStatus from "./components/SubscriptionStatus";
import UserCard from "./components/UserCard";
import { styles } from "./profile.styles";

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
] as const;

export default function ProfileScreen() {
  const user = {
    name: "Hackieouy",
    email: "hackieouy@email.com",
    avatar: "https://i.pravatar.cc/150?img=12",
  };

  const activePlan = {
    title: "Active Monthly Plan",
    subtitle: "30 meals • Valid till 30 Apr • ₹1999",
  };

  const handleLogout = () => {
    console.log("logout");
    // TODO: auth store logout
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <UserCard name={user.name} email={user.email} avatar={user.avatar} />

        <SubscriptionStatus
          title={activePlan.title}
          subtitle={activePlan.subtitle}
        />

        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <ProfileMenuItem
              key={item.title}
              icon={item.icon}
              title={item.title}
              route={item.route}
              showBorder={index !== menuItems.length - 1}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
