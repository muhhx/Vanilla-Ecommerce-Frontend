import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//State Management & Context
import ThemeProvider from "./contexts/ThemeProvider";
import MenuProvider from "./contexts/MenuProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <MenuProvider>
        <App />
      </MenuProvider>
    </ThemeProvider>
  </React.StrictMode>
);
