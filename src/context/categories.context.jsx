import { createContext, useEffect, useState } from "react";
import { generateCategoryMap } from "../utils/firebase/firebase.utils";
// import SHOPDATA from '../shop-data.js';
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMap: {}
})

export const CategoriesProvider = ({ children }) => {

  const [categoriesMap, setCategoriesMap] = useState({});
  useEffect(() => {
    (async () => {
      const categoryMap = await generateCategoryMap();
      setCategoriesMap(categoryMap);
    })();
  }, []);

  return <CategoriesContext.Provider value={{ categoriesMap }}>{children}</CategoriesContext.Provider>
}