import React from "react";
import { Dimensions, Image, ScrollView, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

const images = [
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
];

export default function HeroCarousel() {
  return (
    <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
      {images.map((img, index) => (
        <Image
          key={index}
          source={{ uri: img }}
          style={styles.image}
          resizeMode="cover"
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width,
    height: 260,
  },
});
