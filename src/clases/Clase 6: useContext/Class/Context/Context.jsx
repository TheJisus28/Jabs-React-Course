/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext();

export const Data = ({ children }) => {
  const [color, setColor] = useState("chapi");
  return (
    <Context.Provider value={{ color, setColor }}>{children}</Context.Provider>
  );
};
