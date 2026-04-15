import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const meals = [
  {
    name: "Paneer Tiffin",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  },
  {
    name: "Healthy Veg Bowl",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
  },
];

export default function PopularMeals() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Popular Meals</Text>

      {meals.map((meal, index) => (
        <View key={index} style={styles.card}>
          <Image source={{ uri: meal.image }} style={styles.image} />
          <Text style={styles.name}>{meal.name}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 180,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    padding: 16,
  },
});
