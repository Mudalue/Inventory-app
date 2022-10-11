import React, { createContext, useEffect } from "react";
import { getStorageValue } from "../utils/memory";
import { useLocalStorage } from "../utils/memory";

export const AppContext = createContext();

export const Provider = (props) => {
  const [category, setCategory] = useLocalStorage("category", []);

  useEffect(() => {
    try {
      let data = getStorageValue("category", []);
      if (data === null) {
        localStorage.setItem("category", JSON.stringify([]));
      } else {
        setCategory(data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <AppContext.Provider value={[category, setCategory]}>
      {props.children}
    </AppContext.Provider>
  );
};
