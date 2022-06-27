import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import sessionServices from "../api/services/auth.services";
import IAuth from "../types/auth.types";

const initialState: IAuth = {
  isAuth: false,
  userId: "",
  role: "user",
  status: "idle",
  error: "",
};

export const verifySession = createAsyncThunk(
  "auth/verifySession",
  async (payload, thunkAPI) => {
    try {
      return await sessionServices.verifySession();
    } catch (error) {
      return thunkAPI.rejectWithValue("Não foi possível verificar a sessão.");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ userId: string; role: "user" | "admin" }>
    ) => {
      state.isAuth = true;
      state.userId = action.payload.userId;
      state.role = action.payload.role;
    },
    logout: (state) => {
      state.isAuth = false;
      state.role = "user";
      state.userId = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(verifySession.pending, (state) => {
        state.status = "pending";
      })
      .addCase(verifySession.rejected, (state, { payload }) => {
        state.status = "rejected";
        state.error =
          typeof payload === "string"
            ? payload
            : "Não foi possível verificar a sessão.";
      })
      .addCase(verifySession.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.isAuth = true;
        state.role = payload.role;
        state.userId = payload.userId;
      });
  },
});

export const selectAuth = (state: RootState) => state.auth;
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
