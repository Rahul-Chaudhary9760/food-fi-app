import { Text, TouchableOpacity } from "react-native";

interface Props {
  item: string;
  selected: boolean;
  onPress: () => void;
}

export default function FoodOptionCard({ item, selected, onPress }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`px-4 py-3 rounded-full border mr-2 mb-2 ${
        selected ? "bg-black" : "bg-white"
      }`}
    >
      <Text className={selected ? "text-white" : "text-black"}>{item}</Text>
    </TouchableOpacity>
  );
}
