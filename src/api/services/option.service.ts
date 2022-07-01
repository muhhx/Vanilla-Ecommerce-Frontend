import { axiosPrivate } from "../axios";
import IOption from "../../types/option.types";

const createOption = (payload: IOption) => {
  return axiosPrivate.post("/api/option", payload);
};

const optionServices = {
  createOption,
};

export default optionServices;
