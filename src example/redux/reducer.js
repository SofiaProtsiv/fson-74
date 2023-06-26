const productsInitialState = {
  products: [
    { id: 1, name: "burger", image: "🍔" },
    { id: 2, name: "fries", image: "🍟" },
    { id: 3, name: "coca-cola", image: "🥤" },
  ],
  cart: [],
};

export const productsReducer = (state = productsInitialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const product = action.payload;
      return { ...state, cart: [...state.cart, product] };
    case "REMOVE_FROM_CART":
      const productId = action.payload;
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== productId),
      };
    default:
      return state;
  }
};

const filtersInitialState = {
  searchQuery: "",
  showInCart: false,
};

export const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
    case "SET_SHOW_IN_CART":
      return {
        ...state,
        showInCart: !state.showInCart,
      };
    default:
      return state;
  }
};
