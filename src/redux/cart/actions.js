import { cartActions } from "./constants";

export const addToCart = (product) => ({
    type: cartActions.add,
    payload: product,
  });
  
  export const removeFromCart = (productId) => ({
    type: cartActions.remove,
    payload: productId,
  });
  
  export const incrementProduct = (productId) => ({
    type: cartActions.increment,
    payload: productId,
  });
  
  export const decrementProduct = (productId) => ({
    type: cartActions.decrement,
    payload: productId,
  });