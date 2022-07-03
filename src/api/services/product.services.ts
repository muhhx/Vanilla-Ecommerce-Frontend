import axiosPublic, { axiosPrivate } from "../axios";
import IProduct, {
  IProductData,
  IProductUpdate,
} from "../../types/product.types";

const getProducts = async () => {
  const { data } = await axiosPublic.get("/api/product");

  return data as IProduct[];
};

const createProduct = async (payload: IProductData) => {
  const { data } = await axiosPrivate.post("/api/product", payload);

  return data as IProduct;
};

const deleteProduct = (productId: string) => {
  return axiosPrivate.delete(`/api/product/${productId}`);
};

const updateProduct = (payload: IProductUpdate, productId: string) => {
  return axiosPrivate.put(`/api/product/${productId}`, payload);
};

const productServices = {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
};

export default productServices;
