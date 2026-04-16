import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import FeatureSection from "./component/FeatureSection";
import HeroCarousel from "./component/HeroCarousel";
import HowItWorks from "./component/HowItWorks";
import PopularMeals from "./component/PopularMeals";
import StickyHomeCTA from "./component/StickyHomeCTA";
import SubscriptionBanner from "./component/SubscriptionBanner";
import { styles } from "./home.styles";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <HeroCarousel />
        <Text style={styles.title}>Fresh Daily Tiffin 🍱</Text>
        <Text style={styles.subtitle}>
          Healthy, affordable and customizable meals.
        </Text>
        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/register")}>
          <Text>Signup</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/otp")}>
          <Text>OTP</Text>
        </TouchableOpacity>
        <FeatureSection />
        <HowItWorks />
        <PopularMeals />
        <SubscriptionBanner />
      </ScrollView>
      <StickyHomeCTA />
    </View>
  );
}
