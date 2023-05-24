import React from "react";
import { createBrowserRouter } from "react-router-dom";

export const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <p>Home</p>,
  },
  {
    path: "/about",
    element: <p>About</p>,
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
