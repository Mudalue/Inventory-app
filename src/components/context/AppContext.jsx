import React, { createContext, useEffect } from "react";
import { getStorageValue } from "../utils/memory";
import { useLocalStorage } from "../utils/memory";

export const AppContext = createContext();

export const Provider = (props) => {
  const [machineTypes, setMachineTypes] = useLocalStorage("machine-types", [
    {
      machine: "",
      title: "",
      type: "",
      brand: "",
      weight: "",
      quantity: 0,
      date: "",
    },
  ]);
  const [objectType, setObjectType] = useLocalStorage("object-type", []);
  useEffect(() => {
    let response = getStorageValue("object-type", []);
    console.log(response);
    setObjectType(response);
  }, []);
  useEffect(() => {
    let data = getStorageValue("machine-types", []);
    console.log(data);
    setMachineTypes(data);
  }, []);

  return (
    <AppContext.Provider
      value={[machineTypes, setMachineTypes, objectType, setObjectType]}
    >
      {props.children}
    </AppContext.Provider>
  );
};
