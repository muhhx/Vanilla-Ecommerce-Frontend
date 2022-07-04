import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoryServices from "../api/services/category.services";
import { RootState } from "../app/store";
import { ICategorySlice } from "../types/category.types";

const initialState: ICategorySlice = {
  categories: [],
  status: "idle",
  error: null,
};

export const getCategories = createAsyncThunk(
  "category/getCategories",
  async (payload, thunkAPI) => {
    try {
      const categories = await categoryServices.getCategories();

      return categories;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error");
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getCategories.rejected, (state, payload) => {
        state.status = "rejected";
        state.error = "Não foi possível carregar as categorias.";
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.categories = payload;
      });
  },
});

export const selectCategories = (state: RootState) => state.category;
export default categorySlice.reducer;
