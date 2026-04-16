import { theme } from "@/styles/theme";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthLayout() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.colors.background }}
      edges={["top"]}
    >
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  );
}
