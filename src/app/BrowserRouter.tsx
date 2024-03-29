import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../page/Home";
import { About } from "../page/About";

export const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/support",
    element: <p>Support</p>,
  },
  {
    path: "/*",
    element: <p>Opps!, We can't find the page you are looking for.</p>,
  },
]);
