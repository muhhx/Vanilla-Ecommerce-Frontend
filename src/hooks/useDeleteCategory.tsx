import { useState } from "react";
import categoryServices from "../api/services/category.services";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { deleteCategory } from "../features/categorySlice";

export default function useDeleteCategory() {
  const dispatch: AppDispatch = useDispatch();
  const [error, setError] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "failure" | "success"
  >("idle");

  const deleteCat = async (categoryId: string) => {
    try {
      setStatus("loading");
      setError("");

      await categoryServices.deleteCategory(categoryId);

      dispatch(deleteCategory(categoryId));

      setStatus("success");
    } catch (error: any) {
      if (error.response.data) {
        setError(error.response.data);
      } else {
        setError("Erro ao deletar a categoria.");
      }

      setStatus("failure");
    }
  };

  return [status, error, deleteCat] as const;
}
