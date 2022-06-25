import { ThemeContext } from ".";
import { useContext } from "react";

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;
