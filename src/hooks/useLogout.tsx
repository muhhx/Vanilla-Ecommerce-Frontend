import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../app/store";
import { logout, selectAuth } from "../features/authSlice";
import { resetUser } from "../features/userSlice";
import sessionServices from "../api/services/auth.services";
import { useNavigate } from "react-router-dom";

export default function useLogout() {
  const dispatch: AppDispatch = useDispatch();
  const auth = useSelector(selectAuth);

  const [status, setStatus] = useState<
    "idle" | "loading" | "failure" | "success"
  >("idle");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      setStatus("loading");
      setError("");

      const data = await sessionServices.deleteSession(auth.userId);

      dispatch(logout());
      dispatch(resetUser());

      setStatus("success");
      navigate("/login");
    } catch (error: any) {
      if (error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Erro ao fazer logout");
      }

      setStatus("failure");
    }
  };

  return [status, error, handleLogout] as const;
}
