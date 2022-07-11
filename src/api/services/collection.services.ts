import { axiosPublic, axiosPrivate } from "../axios";
import ICollection from "../../types/collection.types";
import IImage from "../../types/image.types";

const createCollection = async (payload: {
  name: string;
  description: string;
  season: string;
  author: string;
  lookbook: IImage[];
}) => {
  const { data } = await axiosPrivate.post("/api/collection", payload);

  return data as ICollection;
};

const getCollections = async () => {
  const { data } = await axiosPublic.get("/api/collection");

  return data as ICollection[];
};

const updateCollection = async (
  collectionId: string,
  payload: {
    name: string;
    description: string;
    season: string;
    author: string;
    cover: string[];
    homePage: boolean;
  }
) => {
  const { data } = await axiosPrivate.put(
    `/api/collection/${collectionId}`,
    payload
  );

  return data as ICollection;
};

const deleteCollection = async (collectionId: string) => {
  await axiosPrivate.delete(`/api/collection/${collectionId}`);
};

const collectionServices = {
  createCollection,
  getCollections,
  updateCollection,
  deleteCollection,
};

export default collectionServices;
