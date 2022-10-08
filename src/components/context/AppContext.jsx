import React, { createContext, useEffect } from "react";
import { getStorageValue } from "../utils/memory";
import { useLocalStorage } from "../utils/memory";

export const AppContext = createContext();

export const Provider = (props) => {

//   const [objectType, setObjectType] = useLocalStorage("object-type", []);
  const [category, setCategory] = useLocalStorage("category", []);
//   const [all, setAll] = useLocalStorage("All", [])
//   useEffect(() => {
//     let response = getStorageValue("All", []);
//     console.log(response);
//     setAll(response);
//   }, []);

  useEffect(() => {
    let data = getStorageValue("category", []);
    console.log(data);
    setCategory(data);
  }, []);
  return (
    <AppContext.Provider
      value={[category, setCategory]}
    >
      {props.children}
    </AppContext.Provider>
  );
};
