import { router } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./auth.styles";

export default function OtpVerificationScreen() {
  const [otp, setOtp] = useState("");

  const handleVerify = () => {
    router.replace("/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify OTP 🔐</Text>
      <Text style={styles.subtitle}>
        Enter the 6-digit code sent to your phone
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        keyboardType="number-pad"
        maxLength={6}
        value={otp}
        onChangeText={setOtp}
      />

      <TouchableOpacity style={styles.primaryButton} onPress={handleVerify}>
        <Text style={styles.primaryButtonText}>Verify & Continue</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.linkText}>Resend OTP</Text>
      </TouchableOpacity>
    </View>
  );
}
