import { ICartItem } from "../../types/cart.types";
import { axiosPrivate } from "../axios";

const getCheckoutUrl = async (cart: ICartItem[]) => {
  const { data } = await axiosPrivate.post(`/api/checkout`, { cart });

  console.log(data);
  //   return data as string;
};

const paymentServices = {
  getCheckoutUrl,
};

export default paymentServices;
