import { useState } from "react";
import { IProductUpdate } from "../types/product.types";
import productServices from "../api/services/product.services";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { updateProductData } from "../features/productsSlice";

export default function useUpdateProduct() {
  const dispatch: AppDispatch = useDispatch();
  const [error, setError] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "failure" | "success"
  >("idle");

  const updateProduct = async (
    payloadData: IProductUpdate,
    productId: string
  ) => {
    try {
      setStatus("loading");
      setError("");

      const payload = {
        name: payloadData.name || undefined,
        description: payloadData.description || undefined,
        display: payloadData.display,
        isSoldOut: payloadData.isSoldOut,
        isNewProduct: payloadData.isNewProduct,
        hasDiscount: payloadData.hasDiscount,
        discountPrice: payloadData.discountPrice || undefined,
        price: payloadData.price || undefined,
        gender: payloadData.gender || undefined,
        categoryId: payloadData.categoryId || undefined,
        collectionId: payloadData.collectionId || undefined,
        thumb: payloadData.thumb || undefined,
      };

      await productServices.updateProduct(payload, productId);

      dispatch(updateProductData({ payload, productId }));
      setStatus("success");
    } catch (error) {
      setError("Algo deu errado ao atualizar o produto.");
      setStatus("failure");
    }
  };

  return [status, error, updateProduct] as const;
}
