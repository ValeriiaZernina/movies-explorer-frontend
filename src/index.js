import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";

import { CustomBrowserRouter } from "./components/CustomBrowserRouter/CustomBrowserRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <CustomBrowserRouter>
      <App />
    </CustomBrowserRouter>
  </StrictMode>
);
