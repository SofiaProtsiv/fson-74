export const addProduct = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

export const removeProduct = (productId) => {
    return {
      type: "REMOVE_FROM_CART",
      payload: productId,
    };
  };

  export const setSearchQuery = (query) => {
    return {
      type: "SET_SEARCH_QUERY",
      payload: query,
    };
  };
  
  export const setShowInCart = () => {
      return {
        type: "SET_SHOW_IN_CART",
      };
    };
  