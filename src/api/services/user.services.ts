import { axiosPublic } from "../axios";

const registerUser = (payload: {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}) => {
  return axiosPublic.post("/api/user", payload);
};

const userServices = {
  registerUser,
};

export default userServices;
