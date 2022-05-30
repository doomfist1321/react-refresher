import { createContext, useState, useEffect } from "react";
import { registerAuthStateChangeListener } from "../utils/firebase/firebase.utils";

// The actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
})

export const UserProvider = ({ children }) => {
  
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = registerAuthStateChangeListener(user => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, [])


  return <UserContext.Provider value={{ currentUser, setCurrentUser }}>{children}</UserContext.Provider>
}