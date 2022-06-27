import { Outlet, useLocation, Navigate } from "react-router-dom";
import { selectAuth } from "../../features/authSlice";
import { useSelector } from "react-redux";
import Spinner from "../Spinner";
import * as C from "./styles";

export default function AuthLayout() {
  const location = useLocation();
  const auth = useSelector(selectAuth);

  return auth.status === "idle" || auth.status === "pending" ? (
    <C.Section>
      <Spinner />
    </C.Section>
  ) : !auth.isAuth ? (
    <Navigate to="/login" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
}
