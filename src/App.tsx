import React from "react";
import "./index.css";
import { RouterProvider, useNavigate } from "react-router-dom";
import { browserRouter } from "./app/BrowserRouter";

export const App: React.FC = () => {
  return <RouterProvider router={browserRouter} />;
};