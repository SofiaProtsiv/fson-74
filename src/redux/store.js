import { combineReducers } from "redux"
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import cartReducer from "./cart/slice";
import favoritesReducer from "./favorites/slice";

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  cart: cartReducer,
  favorites: favoritesReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})

export const persistor = persistStore(store)

// import { combineReducers, createStore } from "redux"
// import { configureStore } from '@reduxjs/toolkit';
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import cartReducer from "./cart/reducer";
// import favoritesReducer from "./favorites/reducers";

// const rootReducer = combineReducers({
//   cart: cartReducer,
//   favorites: favoritesReducer
// });

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);
