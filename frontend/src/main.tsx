import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Globals Styles
import "./index.css";
import "./styles/normalize.css";

import "./i18n";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
