import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { productsApi } from "./products/productsRTK";

const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer
});

const middleware = [...getDefaultMiddleware(), productsApi.middleware];

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});
