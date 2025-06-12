import { useEffect, useState } from "react";
import { publicRoutes, privateRoutes } from "./routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
export const AppRouter = () => {
  const [actualRouter, setActualRouter] = useState();

  useEffect(() => {
    const logged = localStorage.getItem("logged");
    if (logged == "true") {
      setActualRouter(createBrowserRouter([...privateRoutes]));
    } else {
      setActualRouter(createBrowserRouter([...publicRoutes]));
    }
  }, []);
  if (!actualRouter) {
    return <>Loading...</>;
  }
  return <RouterProvider router={actualRouter} />;
};
