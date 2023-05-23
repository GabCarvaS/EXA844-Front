import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

/**
 * Páginas
 */
import Home from "./routes/Home.jsx";
import NewPost from "./routes/NewPost.jsx";
import Ranking from "./routes/Ranking.jsx";
import Ocurrence from "./routes/Occurrence.jsx";
import Month from "./routes/Month.jsx";
import Marca from "./routes/Marca.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/posicao",
        element: <Home />,
      },
      {
        path: "/modelo",
        element: <NewPost />,
      },
      {
        path: "/populares",
        element: <Ocurrence />,
      },
      {
        path: "/mes",
        element: <Month />,
      },
      {
        path: "/ranking/:mes",
        element: <Ranking />,
      },
      {
        path: "/marca",
        element: <Marca />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
