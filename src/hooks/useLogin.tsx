import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { login } from "../features/authSlice";
import sessionServices from "../api/services/auth.services";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const dispatch: AppDispatch = useDispatch();
  const [status, setStatus] = useState<
    "idle" | "loading" | "failure" | "success"
  >("idle");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (email: string, password: string) => {
    try {
      setStatus("loading");
      setError("");

      const data = await sessionServices.createSession(email, password);
      dispatch(login({ userId: data.userId, role: data.role }));

      setStatus("success");
      navigate("/user");
    } catch (error: any) {
      if (error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Erro ao fazer login");
      }

      setStatus("failure");
    }
  };

  return [status, error, handleLogin] as const;
}
