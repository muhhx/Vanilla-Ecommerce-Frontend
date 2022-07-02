export interface IImage {
  key: string;
  url: string;
}

export interface IOption {
  color: string;
  name: string;
  sizes: string[];
  images: IImage[];
  key: number;
  isWritten: boolean;
}

export interface IProductData {
  name: string;
  description: string;
  price: string;
  gender: string;
  categoryId: string;
  collectionId: string;
  options: IOption[];
}

export default interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPrice: null | number;
  isSoldOut: boolean;
  display: boolean;
  isNewProduct: boolean;
  gender: ["all", "men", "women"];
  thumb: string;
  categoryId: string;
  collectionId: string;
  options: IOption[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IProductSlice {
  products: IProduct[];
  status: "idle" | "pending" | "rejected" | "success";
  error: string | null;
}
