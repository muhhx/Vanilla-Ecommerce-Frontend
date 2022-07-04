import { useState } from "react";
import productServices from "../api/services/product.services";

export default function useFetchProduct() {
  const [error, setError] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "failure" | "success"
  >("idle");

  const fetchProduct = async (productId: string) => {
    try {
      setStatus("loading");

      const product = await productServices.getProduct(productId);

      setStatus("success");

      return product;
    } catch (error) {
      setError("Não foi possível carregar o produto.");
      setStatus("failure");
    }
  };

  return [status, error, fetchProduct] as const;
}
