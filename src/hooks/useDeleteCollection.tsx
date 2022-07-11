import { useState } from "react";
import collectionServices from "../api/services/collection.services";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { removeCollection } from "../features/collectionSlice";

export default function useDeleteCollection() {
  const dispatch: AppDispatch = useDispatch();
  const [error, setError] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "failure" | "success"
  >("idle");

  const deleteCollection = async (collectionId: string) => {
    try {
      setStatus("loading");
      setError("");

      await collectionServices.deleteCollection(collectionId);

      dispatch(removeCollection(collectionId));

      setStatus("success");
    } catch (error) {
      setError("Não foi possível criar a coleção.");
      setStatus("failure");
    }
  };

  return [status, error, deleteCollection] as const;
}
