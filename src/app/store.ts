import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import userReducer from "../features/userSlice";
import productsReducer from "../features/productsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
