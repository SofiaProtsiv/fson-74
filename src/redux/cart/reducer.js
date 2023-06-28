import { createReducer } from "@reduxjs/toolkit";
import {
  addToCart,
  removeFromCart,
  incrementProduct,
  decrementProduct,
} from "./actions";

const initialState = {
  cart: [],
};

const cartReducer = createReducer(initialState, {
  [addToCart]: (state, { payload }) => ({
    ...state,
    cart: [...state.cart, { ...payload, quantity: 1 }],
  }),
  [removeFromCart]: (state, { payload }) => ({
    ...state,
    cart: state.cart.filter((product) => product.id !== payload),
  }),
  [incrementProduct]: (state, { payload }) => ({
    ...state,
    cart: state.cart.map((product) =>
      product.id === payload
        ? { ...product, quantity: product.quantity + 1 }
        : product
    ),
  }),
  [decrementProduct]: (state, { payload }) => ({
    ...state,
    cart: state.cart.map((product) =>
      product.id === payload
        ? { ...product, quantity: product.quantity - 1 }
        : product
    ),
  }),
});

export default cartReducer;

// import { cartActions } from "./constants";

// const initialState = {
//     cart: JSON.parse(localStorage.getItem("cart")) || []
//   };

//   const cartReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case cartActions.add:
// const product = action.payload;

//   return {
//     ...state,
//     cart: [...state.cart, { ...product, quantity: 1 }],
//   };

//       case cartActions.remove:
//         return {
//           ...state,
//           cart: state.cart.filter((product) => product.id !== action.payload),
//         };

//       case cartActions.increment:
// return {
//   ...state,
//   cart: state.cart.map((product) =>
//     product.id === action.payload
//       ? { ...product, quantity: product.quantity + 1 }
//       : product
//   ),
// };

//       case cartActions.decrement:
// return {
//   ...state,
//   cart: state.cart.map((product) =>
//     product.id === action.payload
//       ? { ...product, quantity: product.quantity - 1 }
//       : product
//   ),
// };
//       default:
//         return state;
//     }
//   };

//   export default cartReducer;
