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
import productsReducer from "./products/slice";

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  products: productsReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = [...getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
})];

export const store = configureStore({
  reducer: persistedReducer,
  middleware
})

export const persistor = persistStore(store)