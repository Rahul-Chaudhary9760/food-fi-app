import { useCartStore } from "@/store/cart.store";
import { router } from "expo-router";
import React, { useMemo, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import MealSelector from "./component/MealSelector";
import QuantitySelector from "./component/QuantitySelector";
import StickyFooterCTA from "./component/StickyFooterCTA";
import { styles } from "./customize.styles";
type SelectedMealItem = {
  id: string;
  name: string;
  quantity: number;
};

const ROTI_OPTIONS = [
  "Plain Roti × 4",
  "Butter Roti × 4",
  "2 Butter Roti + 2 Paratha",
  "2 Plain Roti + 2 Butter Naan",
];

const SABZI = ["Paneer Butter Masala", "Mix Veg", "Aloo Gobhi"];

const DAL = ["Dal Tadka", "Dal Makhani"];

export default function CustomizeScreen() {
  const [roti, setRoti] = useState(ROTI_OPTIONS[0]);

  const [sabzi, setSabzi] = useState(SABZI[0]);
  const [dal, setDal] = useState(DAL[0]);
  const [qty, setQty] = useState(1);

  const total = useMemo(() => qty * 69, [qty]);
  const addItem = useCartStore((state) => state.addItem);
  const handleAddToCart = () => {
    addItem({
      id: Date.now().toString(),
      title: "Custom Veg Tiffin",
      roti,
      sabzi,
      dal,
      quantity: qty,
      totalPrice: qty * 69,
    });

    router.push("/cart");
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Customize Your Tiffin</Text>
        <Text style={styles.subtitle}>
          Choose roti, sabzi, dal and quantity
        </Text>

        <MealSelector
          title="Select Roti"
          options={ROTI_OPTIONS}
          selected={roti}
          onSelect={setRoti}
        />
        <MealSelector
          title="Select Sabzi"
          options={SABZI}
          selected={sabzi}
          onSelect={setSabzi}
        />
        <MealSelector
          title="Select Dal"
          options={DAL}
          selected={dal}
          onSelect={setDal}
        />

        <QuantitySelector value={qty} onChange={setQty} />
      </ScrollView>

      <StickyFooterCTA total={total} onPress={handleAddToCart} />
    </View>
  );
}
