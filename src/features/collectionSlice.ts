import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import collectionServices from "../api/services/collection.services";
import { RootState } from "../app/store";
import ICollection, { ICollectionSlice } from "../types/collection.types";

const initialState: ICollectionSlice = {
  collections: [],
  status: "idle",
  error: null,
};

export const getCollections = createAsyncThunk(
  "collection/getCollections",
  async (payload, thunkAPI) => {
    try {
      const collections = await collectionServices.getCollections();

      return collections;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error");
    }
  }
);

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addCollection: (state, action: PayloadAction<ICollection>) => {
      state.collections.push(action.payload);
    },
    removeCollection: (state, action: PayloadAction<string>) => {
      state.collections = state.collections.filter(
        (collection) => collection._id !== action.payload
      );
    },
    putCollection: (state, action: PayloadAction<ICollection>) => {
      for (let i = 0; i < state.collections.length; i++) {
        if (state.collections[i].homePage === true) {
          state.collections[i].homePage = false;
        }
      }

      for (let i = 0; i < state.collections.length; i++) {
        if (state.collections[i]._id === action.payload._id) {
          state.collections[i] = action.payload;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCollections.pending, (state, { payload }) => {
        state.status = "pending";
      })
      .addCase(getCollections.rejected, (state, { payload }) => {
        state.status = "rejected";
        state.error = "Não foi possível carregar as categorias.";
      })
      .addCase(getCollections.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.collections = payload;
      });
  },
});

export const selectCollections = (state: RootState) => state.collection;
export const { addCollection, removeCollection, putCollection } =
  collectionSlice.actions;
export default collectionSlice.reducer;
