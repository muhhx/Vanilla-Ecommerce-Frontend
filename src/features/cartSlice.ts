import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { ICartItem, ICartSlice, ICartPayload } from "../types/cart.types";

const initialState: ICartSlice = {
  cartItems: [],
  cartQuantity: 0,
  cartAmout: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartPayload>) => {
      const { productId, colorIndex, price, size } = action.payload;

      let iterations = 0;
      for (let i = 0; i < state.cartItems.length; i++) {
        iterations++;
        if (
          state.cartItems[i].productId === productId &&
          state.cartItems[i].colorIndex === colorIndex &&
          state.cartItems[i].size === size
        ) {
          state.cartItems[i].quantity += 1;
          state.cartQuantity += 1;
          state.cartAmout += price;
          return;
        }
      }

      if (iterations === state.cartItems.length) {
        state.cartItems.push({
          productId,
          colorIndex,
          size,
          quantity: 1,
        });
        state.cartQuantity += 1;
        state.cartAmout += price;
      }
    },
    subtractFromCart: (state, action: PayloadAction<ICartPayload>) => {
      const { productId, colorIndex, price, size } = action.payload;

      for (let i = 0; i < state.cartItems.length; i++) {
        if (
          state.cartItems[i].productId === productId &&
          state.cartItems[i].colorIndex === colorIndex &&
          state.cartItems[i].size === size
        ) {
          if (state.cartItems[i].quantity > 1) {
            state.cartItems[i].quantity -= 1;
            state.cartQuantity -= 1;
            state.cartAmout -= price;
            return;
          }
        }
      }
    },
    removeFromCart: (state, action: PayloadAction<ICartPayload>) => {
      const { productId, colorIndex, size } = action.payload;

      for (let i = 0; i < state.cartItems.length; i++) {
        if (
          state.cartItems[i].productId === productId &&
          state.cartItems[i].colorIndex === colorIndex &&
          state.cartItems[i].size === size
        ) {
          state.cartQuantity -= state.cartItems[i].quantity;
          state.cartAmout -= state.cartItems[i].quantity * action.payload.price;
          state.cartItems = state.cartItems.filter(
            (item, index) => index !== i
          );
          return;
        }
      }
    },
  },
});

export const selectCart = (state: RootState) => state.cart;
export const { addToCart, removeFromCart, subtractFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
