import Routing from "./Routing";
import { GlobalStyle } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";

import useTheme from "./contexts/ThemeProvider/useTheme";

export default function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Routing />
      <GlobalStyle />
    </ThemeProvider>
  );
}
