import IImage from "./image.types";

export default interface ICollection {
  _id: string;
  name: string;
  description: string;
  season: string; //AW21, SS22, etc
  author: string;
  cover: string[]; //3 imagens
  lookbook: IImage[]; //varias imagens
  homePage: boolean; //true or false
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface ICollectionSlice {
  collections: ICollection[];
  status: "idle" | "pending" | "rejected" | "success";
  error: string | null;
}
