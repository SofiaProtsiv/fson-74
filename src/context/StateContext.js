import React, { createContext, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <Context.Provider
      value={{
        products,
        setProducts,
        isCartModalOpen,
        setIsCartModalOpen,
        searchParams,
        setSearchParams,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
