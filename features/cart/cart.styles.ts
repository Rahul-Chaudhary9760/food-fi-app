import { theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.background,
  },

  title: {
    ...theme.typography.h2,
    color: theme.colors.text,
    marginBottom: theme.spacing.lg,
  },

  checkoutBtn: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.radius.md,
    marginTop: "auto",
    ...theme.shadows.button,
  },

  checkoutText: {
    color: theme.colors.white,
    textAlign: "center",
    fontWeight: "700",
  },
});
