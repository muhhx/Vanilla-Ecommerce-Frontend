import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../app/store";
import { logout } from "../features/authSlice";
import { resetUser } from "../features/userSlice";

export default function useDeleteUser() {
  return <div>useDeleteUser</div>;
}
