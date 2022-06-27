import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth } from "../../features/authSlice";
import useMenu from "../../contexts/MenuProvider/useMenu";
import HeaderAdmin from "../HeaderAdmin";
import Header from "../Header";
import Menu from "../Menu";

export default function Layout() {
  const { role } = useSelector(selectAuth);
  const { pathname } = useLocation();
  const { isMenuOpen, handleCloseMenu } = useMenu();

  useEffect(() => {
    handleCloseMenu();
  }, [pathname]);

  return (
    <>
      {isMenuOpen && <Menu />}
      {role === "admin" && <HeaderAdmin />}
      <Header />
      <Outlet />
    </>
  );
}
