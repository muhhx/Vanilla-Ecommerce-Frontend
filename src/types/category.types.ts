export default interface ICategory {
  _id: string;
  name: string;
}

export interface ICategorySlice {
  categories: ICategory[];
  status: "idle" | "pending" | "rejected" | "success";
  error: string | null;
}
