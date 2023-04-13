import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Layout/Main";
import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import RegisterRBS from "./components/RegisterRBS/RegisterRBS";
import BSForm from "./components/BSForm/BSForm";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/register-rbs",
        element: <RegisterRBS />,
      },
      {
        path: "/register-bs",
        element: <BSForm />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
