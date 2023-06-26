export const addToFavorites = (product) => {
    return {
      type: 'ADD_TO_FAVORITES',
      payload: product,
    };
  };
  
  export const removeFromFavorites = (productId) => {
    return {
      type: 'REMOVE_FROM_FAVORITES',
      payload: productId,
    };
  };