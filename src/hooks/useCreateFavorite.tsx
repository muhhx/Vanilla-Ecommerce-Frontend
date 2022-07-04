import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { selectAuth } from "../features/authSlice";
import { addFavorite } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import favoriteServices from "../api/services/favorite.services";

export default function useCreateFavorite() {
  const [error, setError] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "failure" | "success"
  >("idle");

  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { isAuth, userId } = useSelector(selectAuth);

  const createFavorite = async (productId: string) => {
    try {
      setStatus("loading");
      setError("");

      if (!isAuth) {
        navigate("/login");
      }

      const response = await favoriteServices.createFavorite(userId, productId);

      dispatch(addFavorite(response));

      setStatus("success");
      navigate("/user");
    } catch (error) {
      setError("Não foi possível adicionar o produto aos favoritos");
      setStatus("failure");
    }
  };

  return [status, error, createFavorite] as const;
}
