import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import productServices from "../api/services/product.services";
import IProduct, {
  IProductSlice,
  IProductUpdate,
} from "../types/product.types";
import { RootState } from "../app/store";

const initialState: IProductSlice = {
  products: [],
  filteredProducts: [],
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
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
    },
    updateProductData: (
      state,
      action: PayloadAction<{ payload: IProductUpdate; productId: string }>
    ) => {
      const product = state.products.filter(
        (product) => product._id === action.payload.productId
      )[0];

      const {
        name,
        description,
        gender,
        display,
        isSoldOut,
        isNewProduct,
        price,
        discountPrice,
        hasDiscount,
        categoryId,
        collectionId,
        thumb,
      } = action.payload.payload;

      product.name = name || product.name;
      product.description = description || product.description;
      product.display =
        typeof display === "boolean" ? display : product.display;
      product.isSoldOut =
        typeof isSoldOut === "boolean" ? isSoldOut : product.isSoldOut;
      product.isNewProduct =
        typeof isNewProduct === "boolean" ? isNewProduct : product.isNewProduct;
      product.price = Number(price) || product.price;
      product.hasDiscount =
        typeof hasDiscount === "boolean" ? hasDiscount : product.hasDiscount;
      product.discountPrice = Number(discountPrice) || product.discountPrice;
      product.categoryId = categoryId || product.categoryId;
      product.collectionId = collectionId || product.collectionId;
      product.thumb = thumb || product.thumb;
      product.gender = gender ? ["all", gender] : product.gender;

      state.products = state.products.filter(
        (product) => product._id !== action.payload.productId
      );
      state.products.push(product);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = "rejected";
        state.error = "Oops, não foi possível carregar os produtos.";
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.products = payload ? payload : [];
      });
  },
});

export const selectProducts = (state: RootState) => state.products;
export const { addProduct, removeProduct, updateProductData } =
  productSlice.actions;
export default productSlice.reducer;
