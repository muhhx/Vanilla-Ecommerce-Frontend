import { Outlet, useLocation, Navigate } from "react-router-dom";
import { selectAuth } from "../../features/authSlice";
import { useSelector } from "react-redux";

export default function AdminLayout() {
  const location = useLocation();
  const auth = useSelector(selectAuth);

  return auth.status === "idle" || auth.status === "pending" ? (
    <div>Loading</div>
  ) : !auth.isAuth || auth.role !== "admin" ? (
    <Navigate to="/login" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
}
