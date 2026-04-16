import { router } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./auth.styles";
export default function LoginScreen() {
  const [phone, setPhone] = useState("");

  const handleContinue = () => {
    router.push("/otp");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome Back 👋</Text>
      <Text style={styles.subtitle}>Login to continue your tiffin journey</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter phone number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <TouchableOpacity style={styles.primaryButton} onPress={handleContinue}>
        <Text style={styles.primaryButtonText}>Send OTP</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/register")}>
        <Text style={styles.linkText}>Don’t have an account? Sign up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
