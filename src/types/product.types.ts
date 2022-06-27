interface IOption {
  rgb: string;
  name: string;
  sizes: string[];
  images: string[];
}

export default interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPrice: null | number;
  isAvailable: boolean;
  isNew: boolean;
  gender: ["all", "men", "women"];
  options: IOption[];
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
