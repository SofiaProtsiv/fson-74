import React, { createContext, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <Context.Provider
      value={{
        favorites,
        setFavorites,
        isCartModalOpen,
        setIsCartModalOpen,
        searchParams,
        setSearchParams,
        isAuthModalOpen,
        setIsAuthModalOpen,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
