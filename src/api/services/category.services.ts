import { axiosPublic, axiosPrivate } from "../axios";
import ICategory from "../../types/category.types";

const createCategory = async (name: string) => {
  const { data } = await axiosPrivate.post("/api/category", { name });

  return data as ICategory;
};

const getCategories = async () => {
  const { data } = await axiosPublic.get("/api/category");

  return data as ICategory[];
};

const updateCategory = async (categoryId: string, newName: string) => {
  const { data } = await axiosPrivate.put(`/api/category/${categoryId}`, {
    newName,
  });

  return data as ICategory;
};

const deleteCategory = async (categoryId: string) => {
  const { data } = await axiosPrivate.delete(`/api/category/${categoryId}`);

  return data as ICategory;
};

const categoryServices = {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
};

export default categoryServices;
