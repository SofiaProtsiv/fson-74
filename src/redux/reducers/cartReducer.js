const initialState = {
    cart: JSON.parse(localStorage.getItem("cart")) || []
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        const { payload } = action;
        
        const isProductInCart = state.cart.find((p) => p.id === payload.id);
        if (!isProductInCart) {
          return {
            ...state,
            cart: [...state.cart, { ...payload, quantity: 1 }],
          };
        };
        return state;
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter((product) => product.id !== action.payload),
        };
      case "INCREMENT_PRODUCT":
        return {
          ...state,
          cart: state.cart.map((product) =>
            product.id === action.payload
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      case "DECREMENT_PRODUCT":
        const product = state.cart.find((product) => product.id === action.payload);
  
        if (product.quantity <= 1) {
          return {
            ...state,
            cart: state.cart.filter((product) => product.id !== action.payload),
          };
        }
  
        return {
          ...state,
          cart: state.cart.map((product) =>
            product.id === action.payload
              ? { ...product, quantity: product.quantity - 1 }
              : product
          ),
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;