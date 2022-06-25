import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import useMenu from "../../contexts/MenuProvider/useMenu";
import Header from "../Header";
import Menu from "../Menu";

export default function Layout() {
  const { pathname } = useLocation();
  const { isMenuOpen, handleCloseMenu } = useMenu();

  useEffect(() => {
    handleCloseMenu();
  }, [pathname]);

  return (
    <>
      {isMenuOpen && <Menu />}
      <Header />
      <Outlet />
    </>
  );
}
