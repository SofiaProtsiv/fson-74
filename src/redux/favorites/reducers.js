import { createReducer } from "@reduxjs/toolkit";
import { addToFavorites, removeFromFavorites } from "./actions";

const initialState = {
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

const favoritesReducer = createReducer(initialState, {
  [addToFavorites]: (state, action) => ({
    ...state,
    favorites: [...state.favorites, action.payload],
  }),
  [removeFromFavorites]: (state, action) => ({
    ...state,
    favorites: state.favorites.filter(
      (product) => product.id !== action.payload
    ),
  }),
});

export default favoritesReducer;

// const initialState = {
//   favorites: JSON.parse(localStorage.getItem("favorites")) || [],
// };

// const favoritesReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "favorites/addToFavorites":
//       return { ...state, favorites: [...state.favorites, action.payload] };
//     case "favorites/removeFromFavorites":
//       return {
//         ...state,
//         favorites: state.favorites.filter(
//           (product) => product.id !== action.payload
//         ),
//       };
//     default:
//       return state;
//   }
// };

// export default favoritesReducer;
