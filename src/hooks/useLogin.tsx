import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { login } from "../features/authSlice";
import sessionServices from "../api/services/auth.services";

export default function useLogin() {
  const dispatch: AppDispatch = useDispatch();
  const [status, setStatus] = useState<
    "idle" | "loading" | "failure" | "success"
  >("idle");
  const [error, setError] = useState("");

  const handleLogin = async (email: string, password: string) => {
    try {
      setStatus("loading");
      setError("");

      const data = await sessionServices.createSession(email, password);

      dispatch(login({ userId: data.userId, role: data.role }));
    } catch (error) {
      console.log(error);
      setError("Erro ao fazer login");
    }
  };

  return [status, error, handleLogin];
}
