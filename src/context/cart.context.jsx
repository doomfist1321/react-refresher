import { createContext, useEffect, useState } from "react";


// Helper functions
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);
  if (existingCartItem) {
    return cartItems.map(cartItem => cartItem.id === existingCartItem.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
}

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== existingCartItem.id);
  } else {
    return cartItems.map(cartItem => cartItem.id === existingCartItem.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem);
  }
}

// Context definition
export const CartContext = createContext({
  cartIsOpen: false,
  setCartIsOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  removeItemFromCart: () => null,
  productCount: 0
})

export const CartProvider = ({ children }) => {
  const [cartIsOpen, setCartIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [productCount, setProductCount] = useState(0)

  useEffect(
    () => { setProductCount(cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)) },
    [cartItems]
  );

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove))
  }

  return <CartContext.Provider value={{ cartIsOpen, setCartIsOpen, cartItems, addItemToCart, productCount, removeItemFromCart }}>{children}</CartContext.Provider>
}