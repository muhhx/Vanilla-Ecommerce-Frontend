import { useContext } from "react";
import { MenuContext } from ".";

const useMenu = () => {
  return useContext(MenuContext);
};

export default useMenu;
