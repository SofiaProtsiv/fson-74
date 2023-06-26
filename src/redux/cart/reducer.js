import { cartActions } from "./constants";

const initialState = {
    cart: JSON.parse(localStorage.getItem("cart")) || []
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case cartActions.add:
        const product = action.payload;
        
          return {
            ...state,
            cart: [...state.cart, { ...product, quantity: 1 }],
          };
    
        
      case cartActions.remove:
        return {
          ...state,
          cart: state.cart.filter((product) => product.id !== action.payload),
        };

      case cartActions.increment:
        return {
          ...state,
          cart: state.cart.map((product) =>
            product.id === action.payload
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };

      case cartActions.decrement:
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