import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension"
import {productsReducer, filtersReducer } from "./reducer";

  const rootReducer = combineReducers({
    products: productsReducer,
    filters: filtersReducer
  })

const enhancer = devToolsEnhancer();
const store = createStore(rootReducer, enhancer);

export default store;