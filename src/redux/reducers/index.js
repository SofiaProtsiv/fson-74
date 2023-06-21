import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import favoritesReducer from "./favoritesReducer";
import productsReducer from "./productsReducer";

export default combineReducers({
    cart: cartReducer,
    favorites: favoritesReducer,
    products: productsReducer
})