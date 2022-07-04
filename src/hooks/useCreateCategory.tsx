import { useState } from "react";
import categoryServices from "../api/services/category.services";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { addCategory } from "../features/categorySlice";

export default function useCreateCategory() {
  const dispatch: AppDispatch = useDispatch();
  const [error, setError] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "failure" | "success"
  >("idle");

  const create = async (name: string) => {
    try {
      setStatus("loading");
      setError("");

      const response = await categoryServices.createCategory(name);

      dispatch(addCategory(response));

      setStatus("success");
    } catch (error) {
      setError("Não foi possível criar a categoria.");
      setStatus("failure");
    }
  };

  return [status, error, create] as const;
}
