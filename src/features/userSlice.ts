import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import userServices from "../api/services/user.services";
import favoriteServices from "../api/services/favorite.services";
import { RootState } from "../app/store";
import { IUser, IFavorite } from "../types/user.types";

const initialState: IUser = {
  name: null,
  email: null,
  status: "idle",
  error: null,
  favorites: [],
};

export const getUser = createAsyncThunk(
  "user/getUser",
  async ({ userId }: { userId: string }, thunkAPI) => {
    try {
      const user = await userServices.getUser(userId);
      const favorites = await favoriteServices.getFavorites(userId);

      return { user, favorites };
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(
        "Não foi possível acessar os dados do usuário."
      );
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser: (state) => {
      state.email = null;
      state.name = null;
      state.error = null;
      state.status = "idle";
    },
    addFavorite: (state, action: PayloadAction<IFavorite>) => {
      state.favorites.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getUser.rejected, (state) => {
        state.status = "rejected";
        state.error = "Oops, não foi possível acessar os dados do usuário";
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.email = payload.user.email;
        state.name = payload.user.name;
        state.favorites = payload.favorites;
      });
  },
});

export const selectUser = (state: RootState) => state.user;
export const { resetUser, addFavorite } = userSlice.actions;
export default userSlice.reducer;
