import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import favoriteServices from "../api/services/favorite.services";
import { removeFavorite } from "../features/userSlice";

export default function useRemoveFavorite() {
  const dispatch: AppDispatch = useDispatch();
  const [error, setError] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "failure" | "success"
  >("idle");

  const remove = async (favoriteId: string) => {
    try {
      setStatus("loading");
      setError("");

      await favoriteServices.removeFavorite(favoriteId);

      dispatch(removeFavorite(favoriteId));

      setStatus("success");
    } catch (error) {
      setError("Não foi possível remover dos favoritos");
      setStatus("failure");
    }
  };
  return [status, error, remove] as const;
}
