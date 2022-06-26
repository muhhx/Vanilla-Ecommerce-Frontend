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

const sessionServices = {
  verifySession,
  createSession,
};

export default sessionServices;
