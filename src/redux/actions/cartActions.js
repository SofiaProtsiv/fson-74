export const addToCart = (product) => ({
    type: "ADD_TO_CART",
    payload: product,
  });
  
  export const removeFromCart = (productId) => ({
    type: "REMOVE_FROM_CART",
    payload: productId,
  });
  
  export const incrementProduct = (productId) => ({
    type: "INCREMENT_PRODUCT",
    payload: productId,
  });
  
  export const decrementProduct = (productId) => ({
    type: "DECREMENT_PRODUCT",
    payload: productId,
  });