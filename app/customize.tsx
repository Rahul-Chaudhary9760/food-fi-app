import { router } from "expo-router";
import React, { useMemo, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import {
  raita,
  riceOptions,
  rotis,
  sweets,
  vegetables,
} from "@/constants/foodOptions";
import { useCartStore } from "@/store/cart.store";

type SectionProps = {
  emoji: string;
  title: string;
  options: string[];
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  limit?: number;
};

export default function CustomizeScreen() {
  const [selectedVeg, setSelectedVeg] = useState<string[]>([]);
  const [selectedRoti, setSelectedRoti] = useState<string[]>([]);
  const [selectedRaita, setSelectedRaita] = useState<string[]>([]);
  const [selectedSweet, setSelectedSweet] = useState<string[]>([]);
  const [selectedRice, setSelectedRice] = useState<string[]>([]);

  const addItem = useCartStore((state) => state.addItem);

  const totalSelected = useMemo(
    () =>
      selectedVeg.length +
      selectedRoti.length +
      selectedRaita.length +
      selectedSweet.length,
    [selectedVeg, selectedRoti, selectedRaita, selectedSweet],
  );

  const toggleSelection = (
    item: string,
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>,
    limit?: number,
  ) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((i) => i !== item));
      return;
    }

    if (limit && selected.length >= limit) return;

    setSelected([...selected, item]);
  };

  const renderSectionCard = ({
    emoji,
    title,
    options,
    selected,
    setSelected,
    limit,
  }: SectionProps) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>
          {emoji} {title}
        </Text>

        {limit ? (
          <Text style={styles.countText}>
            {selected.length}/{limit}
          </Text>
        ) : (
          <Text style={styles.countText}>{selected.length} selected</Text>
        )}
      </View>

      <View style={styles.optionsContainer}>
        {options.map((item) => {
          const isSelected = selected.includes(item);
          const isDisabled = !!limit && selected.length >= limit && !isSelected;

          return (
            <TouchableOpacity
              key={item}
              disabled={isDisabled}
              onPress={() =>
                toggleSelection(item, selected, setSelected, limit)
              }
              style={[
                styles.chip,
                isSelected && styles.chipSelected,
                isDisabled && styles.chipDisabled,
              ]}
            >
              <Text
                style={[
                  styles.chipText,
                  isSelected && styles.chipTextSelected,
                  isDisabled && styles.chipTextDisabled,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );

  const handleAddToCart = () => {
    addItem({
      id: Date.now().toString(),
      vegetables: selectedVeg,
      roti: selectedRoti,
      raita: selectedRaita,
      sweets: selectedSweet,
      price: 69,
    });

    router.push("/cart");
  };

  return (
    <View style={styles.screen}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.heading}>🍱 Build Your Tiffin</Text>
        <Text style={styles.subheading}>
          Pick your meal exactly how you like it
        </Text>

        {renderSectionCard({
          emoji: "🥦",
          title: "Choose Any 2 Vegetables",
          options: vegetables,
          selected: selectedVeg,
          setSelected: setSelectedVeg,
          limit: 2,
        })}

        {renderSectionCard({
          emoji: "🫓",
          title: "Choose Roti",
          options: rotis,
          selected: selectedRoti,
          setSelected: setSelectedRoti,
          limit: 1,
        })}

        {renderSectionCard({
          emoji: "🥣",
          title: "Choose Raita",
          options: raita,
          selected: selectedRaita,
          setSelected: setSelectedRaita,
          limit: 1,
        })}

        {renderSectionCard({
          emoji: "🍚",
          title: "Choose Rice",
          options: riceOptions,
          selected: selectedRice,
          setSelected: setSelectedRice,
          limit: 1,
        })}

        {renderSectionCard({
          emoji: "🍮",
          title: "Choose Sweet",
          options: sweets,
          selected: selectedSweet,
          setSelected: setSelectedSweet,
          limit: 1,
        })}
      </ScrollView>

      <View style={styles.bottomBar}>
        <Text style={styles.summaryText}>{totalSelected} items selected</Text>

        <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
          <Text style={styles.buttonText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  scrollContent: {
    paddingTop: 16,
    paddingBottom: 120,
  },
  heading: {
    fontSize: 30,
    fontWeight: "700",
    color: "#111",
    marginBottom: 8,
  },
  subheading: {
    fontSize: 15,
    color: "#666",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 16,
    marginBottom: 18,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
  },
  countText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "600",
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#ddd",
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  chipSelected: {
    backgroundColor: "#111",
    borderColor: "#111",
  },
  chipDisabled: {
    backgroundColor: "#f1f1f1",
    borderColor: "#e5e5e5",
  },
  chipText: {
    color: "#111",
    fontWeight: "500",
  },
  chipTextSelected: {
    color: "#fff",
  },
  chipTextDisabled: {
    color: "#999",
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    padding: 16,
  },
  summaryText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#111",
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
