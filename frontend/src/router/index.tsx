import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { publicRoutes } from "./public-routes";
import { privateRoutes } from "./private-routes";
import { AppContext } from "@/context/app/context";

export const AppRouter: React.FC = () => {
  const { user } = React.useContext(AppContext);

  const isUserLogged = !!user?.id;

  const parsePublicRoutes = publicRoutes(isUserLogged);

  const parsePrivateRoutes = privateRoutes(isUserLogged);

  const router = createBrowserRouter([
    ...parsePublicRoutes,
    ...parsePrivateRoutes,
  ]);

  return <RouterProvider router={router} />;
};
