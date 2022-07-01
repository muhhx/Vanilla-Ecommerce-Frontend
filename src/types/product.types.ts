export interface IProductData {
  name: string;
  description: string;
  price: string;
  gender: string;
  categoryId: string;
  collectionId: string;
  thumb: string | null;
}

export default interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPrice: null | number;
  isSoldOut: boolean;
  display: boolean;
  isNew: boolean;
  gender: ["all", "men", "women"];
  thumb: string;
  categoryId: string;
  collectionId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IProductSlice {
  products: IProduct[];
  status: "idle" | "pending" | "rejected" | "success";
  error: string | null;
}
