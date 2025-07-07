import React, { createContext, useContext, useState, useEffect } from "react";
import {auth} from '../utils/Firebase'

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);



  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);




  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
