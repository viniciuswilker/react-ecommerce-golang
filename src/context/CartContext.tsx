import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { CartItem, Product } from "../types/store";

type CartContextValue = {
  cart: CartItem[];
  cartCount: number;
  subtotal: number;
  shipping: number;
  total: number;
  addToCart: (product: Product) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("bela-loja-cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("bela-loja-cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product: Product) {
    setCart((current) => {
      const item = current.find((cartItem) => cartItem.id === product.id);
      if (!item) return [...current, { ...product, quantity: 1 }];

      return current.map((cartItem) =>
        cartItem.id === product.id
          ? { ...cartItem, quantity: Math.min(cartItem.quantity + 1, cartItem.stock) }
          : cartItem,
      );
    });
  }

  function updateQuantity(productId: number, quantity: number) {
    setCart((current) =>
      current
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.min(Math.max(quantity, 0), item.stock) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function removeFromCart(productId: number) {
    setCart((current) => current.filter((item) => item.id !== productId));
  }

  const value = useMemo(() => {
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal >= 199 || subtotal === 0 ? 0 : 18.9;

    return {
      cart,
      cartCount,
      subtotal,
      shipping,
      total: subtotal + shipping,
      addToCart,
      updateQuantity,
      removeFromCart,
    };
  }, [cart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de CartProvider");
  }

  return context;
}
