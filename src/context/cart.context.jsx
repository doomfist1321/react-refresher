import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);
  if (existingCartItem) {
    return cartItems.map(cartItem => cartItem.id === existingCartItem.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
}

export const CartContext = createContext({
  cartIsOpen: false,
  setCartIsOpen: () => null,
  cartItems: [],
  addItemToCart: () => null
})

export const CartProvider = ({ children }) => {
  const [cartIsOpen, setCartIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  return <CartContext.Provider value={{ cartIsOpen, setCartIsOpen, cartItems, addItemToCart }}>{children}</CartContext.Provider>
}