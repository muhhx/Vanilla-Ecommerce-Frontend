import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth } from "../features/authSlice";
import paymentServices from "../api/services/payment.services";
import { ICartItem } from "../types/cart.types";

export default function useCheckout() {
  const [error, setError] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "failure" | "success"
  >("idle");
  const navigate = useNavigate();
  const { isAuth } = useSelector(selectAuth);

  const createCheckout = async (cartItems: ICartItem[]) => {
    try {
      setStatus("loading");
      setError("");

      if (!isAuth) {
        return navigate("/login");
      }

      if (cartItems.length === 0) {
        setError("O carrinho está vazio.");
        return setStatus("failure");
      }

      //   const url =
      await paymentServices.getCheckoutUrl(cartItems);

      setStatus("success");
      //   window.location.replace(url);
    } catch (error: any) {
      if (error.response.data) {
        setError(error.response.data);
      } else {
        setError("Erro ao fazer o checkout");
      }

      setStatus("failure");
    }
  };

  return [status, error, createCheckout] as const;
}
