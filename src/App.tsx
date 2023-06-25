import React from "react";
import "./index.scss";
import { RouterProvider, useNavigate } from "react-router-dom";
import { browserRouter } from "./app/BrowserRouter";

export const App = () => {
  return <RouterProvider router={browserRouter} />;
};
