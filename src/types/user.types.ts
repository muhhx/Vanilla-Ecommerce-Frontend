export interface IFavorite {
  _id: string;
  productId: string;
}

export interface IUserResponse {
  data: {
    name: string;
    email: string;
  };
}

export interface IUser {
  name: null | string;
  email: null | string;
  status: "idle" | "pending" | "rejected" | "success";
  error: null | string;
  favorites: IFavorite[];
}
