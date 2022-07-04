import { useState } from "react";
import categoryServices from "../api/services/category.services";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { updateCategory } from "../features/categorySlice";

export default function useUpdateCategory() {
  const dispatch: AppDispatch = useDispatch();
  const [error, setError] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "failure" | "success"
  >("idle");

  const update = async (categoryId: string, newName: string) => {
    try {
      setStatus("loading");
      setError("");

      const response = await categoryServices.updateCategory(
        categoryId,
        newName
      );

      dispatch(updateCategory(response));
      setStatus("success");
    } catch (error) {
      setError("Não foi possivel atualizar a categoria.");
      setStatus("failure");
    }
  };

  return [status, error, update] as const;
}
