import { useState } from "react";
import productServices from "../api/services/product.services";
import { IProductData } from "../types/product.types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { addProduct } from "../features/productsSlice";

export default function useCreateProduct() {
  const dispatch: AppDispatch = useDispatch();
  const [error, setError] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "failure" | "success"
  >("idle");

  const createProduct = async (payload: IProductData) => {
    try {
      setStatus("loading");
      setError("");

      const isNotWritten = payload.options.filter(
        (option) => option.isWritten === false
      );

      if (isNotWritten.length > 0) {
        setError("Preencha todos os campos.");
        return setStatus("failure");
      }

      const product = await productServices.createProduct(payload);

      dispatch(addProduct(product));
      setStatus("success");
    } catch (error: any) {
      if (error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Erro ao criar o produto");
      }
    }
  };

  return [status, error, createProduct] as const;
}
