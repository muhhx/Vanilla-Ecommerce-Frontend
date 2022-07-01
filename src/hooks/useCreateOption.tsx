import { useState } from "react";
import optionServices from "../api/services/option.service";
import IOption from "../types/option.types";

export default function useCreateOption() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "failure" | "success"
  >("idle");
  const [error, setError] = useState("");

  const createOption = async (payload: IOption) => {
    try {
      setStatus("loading");
      setError("");

      await optionServices.createOption(payload);

      setStatus("success");
    } catch (error) {
      setStatus("failure");
      setError("Não foi possível criar a option.");
    }
  };

  return [status, error, createOption] as const;
}
