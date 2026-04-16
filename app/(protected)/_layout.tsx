import AppHeader from "@/components/common/AppHeader";
import { theme } from "@/styles/theme";
import { Stack, usePathname } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProtectedLayout() {
  const pathname = usePathname();

  const getTitle = () => {
    if (pathname.includes("profile")) return "Profile";
    if (pathname.includes("addresses")) return "Addresses";
    if (pathname.includes("history")) return "Order History";
    return "Food-fi";
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.colors.background }}
      edges={["top"]}
    >
      <AppHeader title={getTitle()} />
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  );
}
