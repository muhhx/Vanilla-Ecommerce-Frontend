import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../app/store";
import { logout } from "../features/authSlice";
import { resetUser } from "../features/userSlice";
import userServices from "../api/services/user.services";

export default function useDeleteUser() {
  const dispatch: AppDispatch = useDispatch();
  const [error, setError] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "failure" | "success"
  >("idle");

  const deleteUser = async (userId: string) => {
    try {
      setStatus("loading");
      setError("");

      await userServices.deleteUser(userId);

      dispatch(resetUser());
      dispatch(logout());
      setStatus("success");
    } catch (error) {
      setError("Não foi possível fazer o logout.");
      setStatus("failure");
    }
  };

  return [status, error, deleteUser] as const;
}
