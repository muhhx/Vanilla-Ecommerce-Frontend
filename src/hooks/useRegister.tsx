import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userServices from "../api/services/user.services";

export default function useRegister() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "failure" | "success"
  >("idle");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (payload: {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
  }) => {
    try {
      setStatus("loading");
      setError("");

      await userServices.registerUser(payload);

      setStatus("success");
      navigate("/login");
    } catch (error: any) {
      if (error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError(
          "Oops, algo deu errado ao registrar o usuário, verifique os campos."
        );
      }
      setStatus("failure");
    }
  };

  return [status, error, handleRegister] as const;
}
