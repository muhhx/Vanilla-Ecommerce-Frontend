import { useEffect } from "react";

import Routing from "./Routing";
import { GlobalStyle } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import useTheme from "./contexts/ThemeProvider/useTheme";
import useMenu from "./contexts/MenuProvider/useMenu";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./app/store";
import { selectAuth, verifySession } from "./features/authSlice";
import { getUser } from "./features/userSlice";
import { getProducts } from "./features/productsSlice";
import { getCategories } from "./features/categorySlice";
import { getCollections } from "./features/collectionSlice";

export default function App() {
  const { theme } = useTheme();
  const { isMenuOpen } = useMenu();
  const { userId } = useSelector(selectAuth);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(verifySession());
    dispatch(getProducts());
    dispatch(getCategories());
    dispatch(getCollections());
  }, []);

  useEffect(() => {
    if (userId) {
      dispatch(getUser({ userId }));
    }
  }, [userId]);

  return (
    <ThemeProvider theme={theme}>
      <Routing />
      <GlobalStyle isMenuOpen={isMenuOpen} />
    </ThemeProvider>
  );
}
