"use client";

import { productsCart } from "@/constants/constants";
import { createContext, useState } from "react";

export const ShopContext = createContext<{
  cartItems: any;
  addToCart: (itemId: number) => void;
  updateCartItemCount: (newAmount: number, itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  getTotalCartAmount: () => number;
  checkout: () => void;
}>({
  cartItems: {},
  addToCart: () => {},
  updateCartItemCount: () => {},
  removeFromCart: () => {},
  getTotalCartAmount: () => 0,
  checkout: () => {},
});

const getDefaultCart = () => {
  let cart: any = {};
  for (let i = 1; i < productsCart.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = productsCart.find(
          (product) => product.id === Number(item)
        );
        if (itemInfo) {
          totalAmount += cartItems[item] * itemInfo.price;
        }
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId: number) => {
    setCartItems((prev: any) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prev: any) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount: number, itemId: number) => {
    setCartItems((prev: any) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
