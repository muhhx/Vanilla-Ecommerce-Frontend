import axiosPublic from "../axios";
import IProduct from "../../types/product.types";

const getProducts = async () => {
  const { data } = await axiosPublic.get("/api/product");

  return data as IProduct[];
};

const productServices = {
  getProducts,
};

export default productServices;
