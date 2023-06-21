export const toggleFavorite = (product) => {
    return {
      type: "TOGGLE_FAVORITE",
      payload: product,
    };
  };