import { theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    paddingBottom: 120,
  },
  title: {
    ...theme.typography.h1,
    color: theme.colors.text,
    paddingHorizontal: theme.spacing.lg,
    marginTop: theme.spacing.md,
  },
  subtitle: {
    ...theme.typography.body,
    color: theme.colors.secondary,
    paddingHorizontal: theme.spacing.lg,
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing.lg,
  },
});
