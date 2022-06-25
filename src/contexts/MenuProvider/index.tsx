import { createContext, useState, useEffect } from "react";
import { IChildren } from "./types";

const initialState = {
  isMenuOpen: false,
  handleOpenMenu: () => {},
  handleCloseMenu: () => {},
};

export const MenuContext = createContext(initialState);

export default function MenuProvider({ children }: IChildren) {
  const [isMenuOpen, setIsMenuOpen] = useState(initialState.isMenuOpen);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <MenuContext.Provider
      value={{ isMenuOpen, handleOpenMenu, handleCloseMenu }}
    >
      {children}
    </MenuContext.Provider>
  );
}
