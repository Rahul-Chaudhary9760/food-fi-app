# 🚀 Food-fi Architecture Rules

> Purpose: keep the codebase scalable for **multi-dev collaboration, fast MVP shipping, and future product growth**.

This file is the **single source of truth** for frontend architecture decisions.

---

# 1) 📁 Folder Structure Rules

## ✅ `app/` → routing only

`app/` files should only export feature screens.

```tsx
// src/app/(public)/customize.tsx
export { default } from "@/features/customize/CustomizeScreen";
```

❌ No business logic, hooks, API calls, or heavy JSX inside route files.

---

## ✅ `features/` → feature ownership

Every business flow owns its screen, styles, local components, hooks, and types.

```text
features/
 └── customize/
     ├── CustomizeScreen.tsx
     ├── customize.styles.ts
     ├── customize.types.ts
     └── components/
```

Rule:

> If a component is used by only one screen, keep it inside that feature.

---

## ✅ `components/` → shared UI only

Use this only for **truly reusable UI**.

Examples:

- AppHeader
- AppButton
- AppInput
- Loader
- EmptyState

❌ Do not dump feature-specific cards here.

---

# 2) 🎨 Styling & Design System Rules

## ✅ Always use theme tokens

Never use raw values directly in migrated files.

❌ Bad

```tsx
color: "#111";
padding: 20;
borderRadius: 18;
```

✅ Good

```tsx
color: theme.colors.text;
padding: theme.spacing.lg;
borderRadius: theme.radius.lg;
```

---

## ✅ Token source of truth

All design tokens live here:

```text
src/styles/
 ├── colors.ts
 ├── spacing.ts
 ├── typography.ts
 ├── shadows.ts
 └── theme.ts
```

Future changes like dark mode or brand redesign should happen **only here**.

---

# 3) 🧠 State Management Rules

## ✅ Global state → Zustand only

Use `store/` for cross-screen state.

Examples:

- auth
- cart
- checkout
- subscriptions

```text
store/
 ├── auth.store.ts
 └── cart.store.ts
```

Rule:

> UI components should never directly manage business-critical shared state.

---

## ✅ Store contract first

Each store must define:

- state shape
- actions
- selectors (when needed)

Example:

```tsx
items;
addItem();
removeItem();
clearCart();
```

---

# 4) 🌐 API Layer Rules

All network calls go through `services/`.

```text
services/
 ├── api.ts
 ├── auth.api.ts
 ├── meals.api.ts
 └── orders.api.ts
```

❌ Never call axios/fetch inside screens.

✅ Always use service methods.

```tsx
getMeals();
createOrder();
```

---

# 5) 🧩 Component Ownership Rules

## ✅ Feature-local first

Before creating a shared component, ask:

> Is this reused in **3+ places**?

If no → keep inside feature.

This prevents `components/` from becoming garbage.

---

# 6) 🛣️ Routing Rules

Use route groups for access control.

```text
app/
 ├── (public)/
 ├── (auth)/
 └── (protected)/
```

## `(public)`

- home
- customize
- cart

## `(auth)`

- login
- otp

## `(protected)`

- checkout
- profile
- history
- subscriptions

---

# 7) 🧪 Migration Rules

## ✅ Migrate by pattern, not panic

Follow this order:

1. feature folder
2. local components
3. styles
4. theme tokens
5. store
6. api

---

## ✅ One feature at a time

Safe migration flow:

```text
screen → test → commit → next
```

Never migrate multiple unstable screens together.

---

# 8) 🧾 Naming Rules

## Screens

```text
HomeScreen.tsx
CartScreen.tsx
```

## Styles

```text
home.styles.ts
cart.styles.ts
```

## Store

```text
cart.store.ts
```

## API

```text
orders.api.ts
```

Consistency is mandatory.

---

# 9) ✅ Feature Migration Checklist

Use this before marking a screen complete.

```text
[ ] route export file
[ ] feature folder
[ ] local components
[ ] styles file
[ ] theme token usage
[ ] zustand connection
[ ] types added
[ ] api service used
[ ] loading state
[ ] error state
[ ] empty state
```

---

# 🔥 Golden Engineering Principle

> Build for today, structure for tomorrow.

We optimize for:

- fast MVP delivery
- easy onboarding for new devs
- low merge conflicts
- safe refactors
- future admin/web reuse

This document should evolve as the product evolves.
