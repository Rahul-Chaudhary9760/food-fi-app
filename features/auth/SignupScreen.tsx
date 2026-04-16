import { router } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./auth.styles";

export default function SignupScreen() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSignup = () => {
    router.push("/otp");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account 🚀</Text>
      <Text style={styles.subtitle}>Start your healthy meal subscription</Text>

      <TextInput
        style={styles.input}
        placeholder="Full name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Phone number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <TouchableOpacity style={styles.primaryButton} onPress={handleSignup}>
        <Text style={styles.primaryButtonText}>Continue</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/login")}>
        <Text style={styles.linkText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}
