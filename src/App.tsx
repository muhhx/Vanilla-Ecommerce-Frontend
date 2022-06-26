import { useEffect } from "react";

import Routing from "./Routing";
import { GlobalStyle } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import useTheme from "./contexts/ThemeProvider/useTheme";

import { useDispatch } from "react-redux";
import { AppDispatch } from "./app/store";
import { verifySession } from "./features/authSlice";

export default function App() {
  const { theme } = useTheme();
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(verifySession());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Routing />
      <GlobalStyle />
    </ThemeProvider>
  );
}
