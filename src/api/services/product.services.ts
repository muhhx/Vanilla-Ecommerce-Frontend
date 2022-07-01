import axiosPublic, { axiosPrivate } from "../axios";
import IProduct, { IProductData } from "../../types/product.types";

const getProducts = async () => {
  const { data } = await axiosPublic.get("/api/product");

  return data as IProduct[];
};

const createProduct = async (payload: IProductData) => {
  const { data } = await axiosPrivate.post("/api/product", payload);

  return data as string;
};

const productServices = {
  getProducts,
  createProduct,
};

export default productServices;
