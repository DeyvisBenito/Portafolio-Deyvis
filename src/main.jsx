import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { PortafolioPage } from "./pages/PortafolioPage";
import { ProyectosPage } from "./pages/ProyectosPage";
import { ContactarPage } from "./pages/ContactarPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import "./styles/custom.css";

import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <PortafolioPage />,
  },
  {
    path: "/proyectos",
    element: <ProyectosPage />,
  },
  {
    path: "/contactar",
    element: <ContactarPage />,
  },
  {
    path: "/*",
    element: <PortafolioPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
