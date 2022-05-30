import { createContext, useState } from "react";

export const CartContext = createContext({
  cartIsOpen: false,
  setCartIsOpen: () => null
})

export const CartProvider = ({ children }) => {
  const [cartIsOpen, setCartIsOpen] = useState(false)

  return <CartContext.Provider value={{ cartIsOpen, setCartIsOpen }}>{children}</CartContext.Provider>
}