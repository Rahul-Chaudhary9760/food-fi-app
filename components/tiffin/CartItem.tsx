import Button from "@/components/ui/Button";
import { Text, View } from "react-native";

interface Props {
  item: {
    id: string;
    vegetables: string[];
    roti: string[];
    raita: string[];
    sweets: string[];
  };
  onRemove: () => void;
}

export default function CartItem({ item, onRemove }: Props) {
  return (
    <View className="p-4 border rounded-2xl mb-4">
      <Text className="font-semibold">Veg: {item.vegetables.join(", ")}</Text>
      <Text>Roti: {item.roti.join(", ")}</Text>
      <Text>Raita: {item.raita.join(", ")}</Text>
      <Text>Sweet: {item.sweets.join(", ")}</Text>

      <Button title="Remove" onPress={onRemove} />
    </View>
  );
}
