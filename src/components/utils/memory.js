import { useState, useEffect } from "react";

//GETTING STORED VALUE
export const getStorageValue = (key) => {
  try {
    const saved = window.localStorage.getItem(key);
    const initial = JSON.parse(saved);
    console.log(`sup `,initial);
    return initial;
  } catch (error) {
    console.log(error.message);
  }
};

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key);
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export const clearLocalStorage = () => {
  window.localStorage.clear();
};
