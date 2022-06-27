import { useEffect } from "react";

import Routing from "./Routing";
import { GlobalStyle } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import useTheme from "./contexts/ThemeProvider/useTheme";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./app/store";
import { selectAuth, verifySession } from "./features/authSlice";
import { getUser } from "./features/userSlice";
import { getProducts } from "./features/productsSlice";

export default function App() {
  const { theme } = useTheme();
  const { userId } = useSelector(selectAuth);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(verifySession());
    dispatch(getProducts());
    //Dispatch: products, collections, categories
  }, []);

  useEffect(() => {
    if (userId) {
      dispatch(getUser({ userId }));
    }
    //Dispatch: userData, userPayments, userFavorites, userAdresses, userPedidos
    //Dispatch esses estados no useLogin (antes de ser redirecionado) e aqui (quando o usuario ja tem sessao aberta)- dispatch ação para resetar esses estados no logout
    //Criar useRefresh hook, onde caso de errado (expirou sessão, reseta estados e estado auth)

    //userSlice (TODOS OS DADOS RELACIONADOS AO USUARIO Q ESTA AUTENTICADO): thunk to fetch all data at once - add fav reducer, add endereço reducer, etc
  }, [userId]);

  return (
    <ThemeProvider theme={theme}>
      <Routing />
      <GlobalStyle />
    </ThemeProvider>
  );
}
