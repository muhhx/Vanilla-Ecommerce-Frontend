import { useState } from "react";
import productServices from "../api/services/product.services";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { removeProduct } from "../features/productsSlice";

export default function useDeleteProduct() {
  const dispatch: AppDispatch = useDispatch();
  const [error, setError] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "failure" | "success"
  >("idle");

  const deleteProduct = async (productId: string) => {
    try {
      setStatus("loading");
      setError("");

      const response = await productServices.deleteProduct(productId);

      dispatch(removeProduct(productId));
      setStatus("success");
    } catch (error) {
      setError("Algo deu errado ao tentar deletar o produto.");
      setStatus("failure");
    }
  };

  return [status, error, deleteProduct] as const;
}
