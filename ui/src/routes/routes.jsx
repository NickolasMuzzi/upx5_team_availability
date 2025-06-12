import { Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import AnswerForm from "../pages/AnswerForm";

export const publicRoutes = [
  { path: "/login", element: <LoginPage /> },
  { path: "*", element: <Navigate to="/login" /> },
];

export const privateRoutes = [
  { path: "/home", element: <HomePage /> },
  {
    path: "/productivity_form",
    element: <AnswerForm questions={"productivity"} />,
  },
  {
    path: "/security_form",
    element: <AnswerForm questions={"security"} />,
  },
  { path: "*", element: <Navigate to="/home" /> },
];
