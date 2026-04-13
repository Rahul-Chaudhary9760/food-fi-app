import { Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export default function Button({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-black py-4 rounded-2xl items-center mt-4"
      activeOpacity={0.8}
    >
      <Text className="text-white font-semibold text-base">{title}</Text>
    </TouchableOpacity>
  );
}
