import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites:[],
};

const favoritesReducer = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, {payload}) {
      return {
        ...state,
        favorites: [...state.favorites, payload],
      };
    },
    removeFromFavorites(state, {payload}) {
      return {
        ...state,
        favorites: state.favorites.filter(
          (product) => product.uid !== payload
        ),
      };
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesReducer.actions;
export default favoritesReducer.reducer;