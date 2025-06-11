import { useEffect, useState } from "react";
import { publicRoutes } from "./routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
export const AppRouter = () => {
  const [actualRouter, setActualRouter] = useState();

  useEffect(() => {
    setActualRouter(createBrowserRouter([...publicRoutes]));
  }, []);
  if (!actualRouter) {
    return <>Loading...</>;
  }
  return <RouterProvider router={actualRouter} />;
};
