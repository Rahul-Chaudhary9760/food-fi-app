import { theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

const { colors, spacing, radius, typography, shadows } = theme;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.xl,
    justifyContent: "center",
  },

  title: {
    ...typography.h1,
    color: colors.primary,
    marginBottom: spacing.sm,
    textAlign: "center",
  },

  subtitle: {
    ...typography.body,
    color: colors.secondary,
    marginBottom: spacing.xl,
    textAlign: "center",
  },

  input: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    ...typography.body,
  },

  primaryButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.lg,
    borderRadius: radius.md,
    alignItems: "center",
    marginBottom: spacing.lg,
    ...shadows.button,
  },

  primaryButtonText: {
    ...typography.body,
    color: colors.white,
    fontWeight: "700",
  },

  linkText: {
    ...typography.caption,
    color: colors.primary,
    textAlign: "center",
  },
});
