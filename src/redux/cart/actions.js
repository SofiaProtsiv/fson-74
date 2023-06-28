import { createAction } from "@reduxjs/toolkit";

export const addToCart = createAction("cart/addToCart");
export const removeFromCart = createAction("cart/removeFromCart");
export const incrementProduct = createAction("cart/incrementProduct");
export const decrementProduct = createAction("cart/decrementProduct");


// const cartActions = Object.freeze({
//   add: "cart/addToCart",
//   remove: "cart/removeFromCart",
//   increment: "cart/incrementProduct",
//   decrement: "cart/decrementProduct",
// });

// export const addToCart = (product) => ({
//     type: cartActions.add,
//     payload: product,
//   });
  
//   export const removeFromCart = (productId) => ({
//     type: cartActions.remove,
//     payload: productId,
//   });
  
//   export const incrementProduct = (productId) => ({
//     type: cartActions.increment,
//     payload: productId,
//   });
  
//   export const decrementProduct = (productId) => ({
//     type: cartActions.decrement,
//     payload: productId,
//   });