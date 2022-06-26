import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//State Management & Context
import { Provider } from "react-redux";
import { store } from "./app/store";

import ThemeProvider from "./contexts/ThemeProvider";
import MenuProvider from "./contexts/MenuProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <MenuProvider>
          <App />
        </MenuProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
