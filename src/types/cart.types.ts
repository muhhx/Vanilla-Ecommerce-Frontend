export interface ICartItem {
  productId: string;
  colorIndex: number; //0, 1, etc, dependendo da cor que voce escolheu
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
