import { theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    padding: theme.spacing.lg,
    paddingBottom: 120,
  },
  title: {
    ...theme.typography.h1,
    color: theme.colors.text,
    fontSize: 28, // optional override for customize screen
  },
  subtitle: {
    ...theme.typography.caption,
    color: theme.colors.secondary,
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing.lg,
    fontSize: 15, // optional exact match
  },
});
