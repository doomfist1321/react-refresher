import { createContext, useEffect, useState } from "react";
// import SHOPDATA from '../shop-data.js';
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

export const ProductContext = createContext({
  products: []
})

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>
}