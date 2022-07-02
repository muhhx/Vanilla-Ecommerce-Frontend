import { useState } from "react";
import imageServices from "../api/services/image.services";
import IImage from "../types/image.types";

export default function useImageUpload() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "failure" | "success"
  >("idle");
  const [error, setError] = useState("");

  const handleUploadImages = async (files: FileList) => {
    try {
      setStatus("loading");
      setError("");

      const formData = new FormData();

      for (let i = 0; i < files.length; i++) {
        formData.append("File", files[i]);
      }

      const imagesResponse = await imageServices.uploadFiles(formData);

      setStatus("success");
      return imagesResponse;
    } catch (error: any) {
      if (error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Erro ao fazer upload das imagens.");
      }

      setStatus("failure");
    }
  };

  return [status, error, handleUploadImages] as const;
}
