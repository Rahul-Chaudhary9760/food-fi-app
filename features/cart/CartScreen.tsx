import { useCartStore } from "@/store/cart.store";
import React, { useMemo } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./cart.styles";
import CartItem from "./components/cartItem";
import CartSummary from "./components/cartSummary";
export default function CartScreen() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);

  const subtotal = useMemo(() => {
    return items.reduce((sum, item) => sum + item.totalPrice, 0);
  }, [items]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart 🛒</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={() => removeItem(item.id)}
          />
        ))}

        <CartSummary subtotal={subtotal} />
      </ScrollView>

      <TouchableOpacity style={styles.checkoutBtn}>
        <Text style={styles.checkoutText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}
