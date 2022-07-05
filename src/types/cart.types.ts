export interface ICartItem {
  productId: string;
  colorIndex: number;
  size: string;
  quantity: number;
}

export interface ICartPayload {
  productId: string;
  colorIndex: number;
  size: string;
  price: number;
}

export interface ICartSlice {
  cartItems: ICartItem[];
  cartQuantity: number;
  cartAmout: number;
}
