import AppHeader from "@/components/common/AppHeader";
import { theme } from "@/styles/theme";
import { Stack, usePathname } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PublicLayout() {
  const pathname = usePathname();

  const getTitle = () => {
    if (pathname.includes("home")) return "Home";
    if (pathname.includes("cart")) return "Cart";
    if (pathname.includes("customize")) return "Customize";
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
