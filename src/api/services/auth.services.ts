import { axiosPublic, axiosPrivate } from "../axios";
import { IAuthResponse } from "../../types/auth.types";

const verifySession = async () => {
  const { data } = (await axiosPrivate.get("/api/session")) as IAuthResponse;

  return data;
};

const createSession = async (email: string, password: string) => {
  const { data } = (await axiosPublic.post("/api/session", {
    email,
    password,
  })) as IAuthResponse;

  return data;
};

const deleteSession = async (userId: string) => {
  await axiosPrivate.delete(`/api/session/${userId}`);
};

const sessionServices = {
  verifySession,
  createSession,
  deleteSession,
};

export default sessionServices;
