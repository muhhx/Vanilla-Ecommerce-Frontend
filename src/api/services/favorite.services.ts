import { axiosPrivate } from "../axios";
import { IFavorite } from "../../types/user.types";

const getFavorites = async (userId: string) => {
  const { data } = await axiosPrivate.get(`/api/favorite/${userId}`);

  return data as IFavorite[];
};

const createFavorite = async (userId: string, productId: string) => {
  const { data } = await axiosPrivate.post(`/api/favorite/${userId}`, {
    productId,
  });

  return data as IFavorite; //Id do product
};

const removeFavorite = async (favoriteId: string) => {
  const { data } = await axiosPrivate.delete(`/api/favorite/${favoriteId}`);

  return data as IFavorite; //Id do produto removido
};

const favoriteServices = {
  getFavorites,
  createFavorite,
};

export default favoriteServices;
