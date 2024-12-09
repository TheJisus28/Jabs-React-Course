import { createContext, useState } from "react";
import Info from "../assets/information";

// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext();

// eslint-disable-next-line react/prop-types
export const Data = ({ children }) => {
  const [data, setData] = useState(Info[0]);
  return (
    <Context.Provider value={{ data, setData }}>{children}</Context.Provider>
  );
};
