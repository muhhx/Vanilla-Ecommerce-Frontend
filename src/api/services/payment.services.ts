import { ICartItem } from "../../types/cart.types";
import { axiosPrivate } from "../axios";

const getCheckoutUrl = (cart: ICartItem[]) => {
  return axiosPrivate.post(`/api/checkout`, { cart });
};

const paymentServices = {
  getCheckoutUrl,
};

export default paymentServices;
