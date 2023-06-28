import { createAction } from "@reduxjs/toolkit";

export const addToFavorites = createAction("favorites/addToFavorites")
export const removeFromFavorites = createAction("favorites/removeFromFavorites")

// dispatch(addToFavorites())
// export const addToFavorites = (product) => {
//     return {
//       type: "favorites/addToFavorites",
//       payload: product,
//     };
//   };
  
//   export const removeFromFavorites = (productId) => {
//     return {
//       type: "favorites/removeFromFavorites",
//       payload: productId,
//     };
//   };