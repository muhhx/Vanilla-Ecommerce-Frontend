export interface IAuthResponse {
  data: {
    userId: string;
    role: "user" | "admin";
  };
}

export default interface IAuth {
  isAuth: boolean;
  userId: string;
  role: "user" | "admin";
  status: "idle" | "pending" | "rejected" | "success";
  error: string | null;
}
