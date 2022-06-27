import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userServices from "../api/services/user.services";
import { RootState } from "../app/store";
import { IUser } from "../types/user.types";

const initialState: IUser = {
  name: null,
  email: null,
  status: "idle",
  error: null,
};

export const getUser = createAsyncThunk(
  "user/getUser",
  async ({ userId }: { userId: string }, thunkAPI) => {
    try {
      const user = await userServices.getUser(userId);

      return user;
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
        state.email = payload.email;
        state.name = payload.name;
      });
  },
});

export const selectUser = (state: RootState) => state.user;
export const { resetUser } = userSlice.actions;
export default userSlice.reducer;

//Delete user
//Update user
