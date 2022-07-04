import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import categoryServices from "../api/services/category.services";
import { RootState } from "../app/store";
import ICategory, { ICategorySlice } from "../types/category.types";

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
  reducers: {
    addCategory: (state, action: PayloadAction<ICategory>) => {
      state.categories.push(action.payload);
    },
    deleteCategory: (state, action: PayloadAction<string>) => {
      state.categories = state.categories.filter(
        (category) => category._id !== action.payload
      );
    },
    updateCategory: (state, action: PayloadAction<ICategory>) => {
      const category = state.categories.filter(
        (category) => category._id === action.payload._id
      )[0];

      category.name = action.payload.name;

      state.categories = state.categories.filter(
        (category) => category._id !== action.payload._id
      );

      state.categories.push(category);
    },
  },
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
export const { addCategory, deleteCategory, updateCategory } =
  categorySlice.actions;
export default categorySlice.reducer;
