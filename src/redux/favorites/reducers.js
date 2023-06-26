import { favoritesActions } from "./constants";

const initialState = {
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case favoritesActions.add:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case favoritesActions.remove:
      return {
        ...state,
        favorites: state.favorites.filter(
          (product) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default favoritesReducer;
