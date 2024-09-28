import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { baseApi } from "./api/baseApi"; // baseApi remains if you are using it for other endpoints
import authReducer from "./features/authSlice";
import { carApi } from "./features/cars/carApi"; // Import carApi for car-related queries
import { userApi } from "./features/users/userApi";

const persistConfig = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer, // Keep baseApi reducer if still using
    [carApi.reducerPath]: carApi.reducer, // Add carApi reducer
    [userApi.reducerPath]: userApi.reducer, // Add carApi reducer
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(baseApi.middleware) // Keep baseApi middleware if used
      .concat(carApi.middleware) // Add carApi middleware
      .concat(userApi.middleware), // Add carApi middleware
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
