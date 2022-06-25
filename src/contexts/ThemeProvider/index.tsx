import { createContext, useState } from "react";
import { IChildren } from "./types";
import themes from "../../styles/themeStyles";

const initialValue = {
  theme: themes.themeLight,
  handleChangeTheme: () => {},
};

export const ThemeContext = createContext(initialValue);

export default function ThemeProvider({ children }: IChildren) {
  const [theme, setTheme] = useState(initialValue.theme);

  const handleChangeTheme = () => {
    setTheme(theme.name === "light" ? themes.themeDark : themes.themeLight);
  };

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
