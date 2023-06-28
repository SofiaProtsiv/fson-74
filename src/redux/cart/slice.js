import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => ({
      ...state,
      cart: [...state.cart, { ...payload, quantity: 1 }],
    }),
    removeFromCart: (state, { payload }) => ({
      ...state,
      cart: state.cart.filter((product) => product.id !== payload),
    }),
    incrementProduct: (state, { payload }) => ({
      ...state,
      cart: state.cart.map((product) =>
        product.id === payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      ),
    }),
    decrementProduct: (state, { payload }) => ({
      ...state,
      cart: state.cart.map((product) =>
        product.id === payload
          ? { ...product, quantity: product.quantity - 1 }
          : product
      ),
    }),
  },
});

export const { addToCart, removeFromCart, incrementProduct, decrementProduct } =
  cartSlice.actions;
  
export default cartSlice.reducer;
