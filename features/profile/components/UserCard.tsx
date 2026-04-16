import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "../profile.styles";

type Props = {
  name: string;
  email: string;
  avatar: string;
};

export default function UserCard({ name, email, avatar }: Props) {
  return (
    <View style={styles.profileCard}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  );
}
