const initialState = {
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      const { payload: product } = action;

      const isProductInFavorites = state.favorites.find(
        (p) => p.id === product.id
      );
      let updatedFavorites;

      if (!isProductInFavorites) {
        updatedFavorites = [...state.favorites, product];
      } else {
        updatedFavorites = state.favorites.filter((p) => p.id !== product.id);
      }

      return {
        ...state,
        favorites: updatedFavorites,
      };

    default:
      return state;
  }
};

export default favoritesReducer;
