import { axiosPrivate } from "../axios";
import IImage from "../../types/image.types";

const uploadFiles = async (files: FormData) => {
  const { data } = await axiosPrivate.post("/api/image", files);

  return data as IImage[];
};

const imageServices = {
  uploadFiles,
};

export default imageServices;
