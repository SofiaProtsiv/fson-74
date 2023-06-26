import React, { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
    const favoritesLS = JSON.parse(localStorage.getItem("favorites")) || [];

    setCart(cartLS);
    setFavorites(favoritesLS);
  }, []);

  return (
    <Context.Provider
      value={{
        products,
        setProducts,
        cart,
        setCart,
        favorites,
        setFavorites,
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
