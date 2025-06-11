import { Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

export const publicRoutes = [
  { path: "/login", element: <LoginPage /> },
  { path: "*", element: <Navigate to="/login" /> },
];

export const privateRoutes = [
  { path: "/home", element: <>gome</> },
  { path: "*", element: <Navigate to="/home" /> },
];
