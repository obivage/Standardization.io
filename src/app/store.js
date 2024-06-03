import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { apiSlice } from "../api/apiSlice";
import cartReducer from "../app/slices/cartSplice";
export const SecretKey = import.meta.env.VITE_SECRET_PERSIST_KEY;

const persistConfig = {
  key: SecretKey,
  storage,
};
const rootReducer = combineReducers({
  cart: cartReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
