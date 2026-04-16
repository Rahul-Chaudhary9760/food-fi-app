import { theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

const { colors, spacing, radius, typography, shadows } = theme;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    padding: spacing.lg,
    paddingBottom: spacing.xl,
  },

  profileCard: {
    backgroundColor: colors.white,
    borderRadius: radius.xl,
    alignItems: "center",
    padding: spacing.xl,
    marginBottom: spacing.lg,
    ...shadows.card,
  },

  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    marginBottom: spacing.md,
  },

  name: {
    ...typography.h2,
    color: colors.primary,
  },

  email: {
    ...typography.caption,
    color: colors.secondary,
    marginTop: spacing.xs,
  },

  subscriptionCard: {
    backgroundColor: colors.primary,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },

  subscriptionTitle: {
    ...typography.body,
    color: colors.white,
    fontWeight: "700",
  },

  subscriptionText: {
    ...typography.caption,
    color: colors.muted,
    marginTop: spacing.xs,
  },

  menuContainer: {
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    paddingVertical: spacing.xs,
    marginBottom: spacing.xl,
  },

  menuItem: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },

  menuText: {
    ...typography.body,
    color: colors.text,
    fontWeight: "600",
  },

  logoutButton: {
    backgroundColor: colors.white,
    paddingVertical: spacing.lg,
    borderRadius: radius.md,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
  },

  logoutText: {
    ...typography.body,
    fontWeight: "700",
    color: colors.danger,
  },
});
