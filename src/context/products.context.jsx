import { createContext, useState } from "react";
import SHOPDATA from '../shop-data.json';

export const ProductContext = createContext({
  products: []
})

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOPDATA);
  return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>
}