import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import cartReducer from "./cart/reducer";
import favoritesReducer from "./favorites/reducers";

const rootReducer = combineReducers({
  cart: cartReducer,
  favorites: favoritesReducer
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
