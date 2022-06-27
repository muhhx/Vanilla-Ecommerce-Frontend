import axios from "axios";
import config from "../config";

const BASE_URL = config.baseUrl;

export const axiosPublic = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

const refresh = async () => {
  try {
    const response = await axiosPublic.put("/api/session");

    return response.data;
  } catch (error) {
    return error;
  }
};

axiosPrivate.interceptors.response.use(
  (response) => response,
  async (error) => {
    const prevRequest = error.config;
    if (error.response.status === 403 && !prevRequest.sent) {
      prevRequest.sent = true;
      const response = await refresh();

      if (!response) return Promise.reject(error);

      return axiosPrivate(prevRequest);
    }
    return Promise.reject(error);
  }
);

export default axiosPublic;
