import { IUserResponse } from "../../types/user.types";
import { axiosPrivate, axiosPublic } from "../axios";

const registerUser = (payload: {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}) => {
  return axiosPublic.post("/api/user", payload);
};

const getUser = async (userId: string) => {
  const { data } = (await axiosPrivate.get(
    `/api/user/${userId}`
  )) as IUserResponse;

  return data;
};

const deleteUser = async (userId: string) => {
  return axiosPrivate.delete(`/api/user/${userId}`);
};

const userServices = {
  registerUser,
  getUser,
  deleteUser,
};

export default userServices;
