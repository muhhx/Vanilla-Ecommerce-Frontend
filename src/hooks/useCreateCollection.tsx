import { useState } from "react";
import collectionServices from "../api/services/collection.services";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import IImage from "../types/image.types";
import { addCollection } from "../features/collectionSlice";

export default function useCreateCollection() {
  const dispatch: AppDispatch = useDispatch();
  const [error, setError] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "failure" | "success"
  >("idle");

  const createCollection = async (payload: {
    name: string;
    description: string;
    season: string;
    author: string;
    lookbook: IImage[];
  }) => {
    try {
      setStatus("loading");
      setError("");

      const response = await collectionServices.createCollection(payload);

      dispatch(addCollection(response));

      setStatus("success");
    } catch (error) {
      setError("Não foi possível criar a coleção.");
      setStatus("failure");
    }
  };

  return [status, error, createCollection] as const;
}
