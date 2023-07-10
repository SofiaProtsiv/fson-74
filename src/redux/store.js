import { combineReducers } from "redux"
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
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

import { productsApi } from "./products";
import { authApi } from "./auth";
import favoritesReducer from "./favorites/slice";
import authReducer from './auth/slice';


const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  favorites: favoritesReducer,
  auth: authReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = [...getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
}), productsApi.middleware, authApi.middleware];

export const store = configureStore({
  reducer: persistedReducer,
  middleware
})

export const persistor = persistStore(store)