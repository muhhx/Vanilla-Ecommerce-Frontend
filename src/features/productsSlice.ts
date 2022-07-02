import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import productServices from "../api/services/product.services";
import IProduct, { IProductSlice } from "../types/product.types";
import { RootState } from "../app/store";

const initialState: IProductSlice = {
  products: [],
  status: "idle",
  error: null,
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (payload, thunkAPI) => {
    try {
      const products = await productServices.getProducts();

      return products;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("Error");
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      state.products.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = "rejected";
        state.error = "Oops, não foi possível carregar nossos produtos.";
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.products = payload ? payload : [];
      });
  },
});

export const selectProducts = (state: RootState) => state.products;
export const { addProduct } = productSlice.actions;
export default productSlice.reducer;

//AddProduct (when you create one)
//UpdateProduct (when you update one)
//RemoveProduct (when you remove one)
