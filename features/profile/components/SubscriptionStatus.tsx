import React from "react";
import { Text, View } from "react-native";
import { styles } from "../profile.styles";
type Props = {
  title: string;
  subtitle: string;
};

export default function SubscriptionStatus({ title, subtitle }: Props) {
  return (
    <View style={styles.subscriptionCard}>
      <Text style={styles.subscriptionTitle}>{title}</Text>
      <Text style={styles.subscriptionText}>{subtitle}</Text>
    </View>
  );
}
