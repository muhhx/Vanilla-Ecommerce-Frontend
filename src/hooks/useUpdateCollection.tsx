import { useState } from "react";
import collectionServices from "../api/services/collection.services";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { putCollection } from "../features/collectionSlice";

export default function useUpdateCollection() {
  const dispatch: AppDispatch = useDispatch();
  const [error, setError] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "failure" | "success"
  >("idle");

  const updateCollection = async (
    collectionId: string,
    payload: {
      name: string;
      description: string;
      season: string;
      author: string;
      cover: string[];
      homePage: boolean;
    }
  ) => {
    try {
      setStatus("loading");
      setError("");

      const updatedCollection = await collectionServices.updateCollection(
        collectionId,
        payload
      );

      dispatch(putCollection(updatedCollection));

      setStatus("success");
    } catch (error: any) {
      if (error.response.data) {
        setError(error.response.data);
      } else {
        setError("Não foi possível atualizar a coleção.");
      }

      setStatus("failure");
    }
  };

  return [status, error, updateCollection] as const;
}
