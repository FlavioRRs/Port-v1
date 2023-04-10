import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Conhecimentos from "./pages/Conhecimentos";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre";
import Projetos from "./pages/Projetos";
import Error from "./pages/ErrorRoute";
import "./index.css";
import BemVindo from "./pages/BemVindo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "Conhecimentos",
        element: <Conhecimentos />,
      },
      {
        path: "Contato",
        element: <Contato />,
      },
      {
        path: "Projetos",
        element: <Projetos />,
      },
      {
        path: "Sobre",
        element: <Sobre />,
      },
      {
        path: "/",
        element: <BemVindo />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
