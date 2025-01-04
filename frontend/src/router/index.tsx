import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { publicRoutes } from "./public-routes";
import { privateRoutes } from "./private-routes";

export const AppRouter: React.FC = () => {
  const isUserLogged = true;

  const parsePublicRoutes = publicRoutes(isUserLogged);

  const parsePrivateRoutes = privateRoutes(isUserLogged);

  const router = createBrowserRouter([
    ...parsePublicRoutes,
    ...parsePrivateRoutes,
  ]);

  return <RouterProvider router={router} />;
};
