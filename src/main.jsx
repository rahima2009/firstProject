import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Store } from "./Store.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Store />
    </BrowserRouter>
  </StrictMode>
);
