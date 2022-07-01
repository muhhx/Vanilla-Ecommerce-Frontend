import { useState } from "react";
import productServices from "../api/services/product.services";
import { IProductData } from "../types/product.types";

export default function useCreateProduct() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "failure" | "success"
  >("idle");
  const [error, setError] = useState("");

  const create = async (payload: IProductData) => {
    try {
      setStatus("loading");
      setError("");

      const data = await productServices.createProduct(payload);

      setStatus("success");
      return data;
    } catch (error: any) {
      if (error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Erro ao criar o produto");
      }

      setStatus("failure");
    }
  };

  return [status, error, create] as const;
}
