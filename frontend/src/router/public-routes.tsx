import * as React from "react";
import { Navigate, Outlet, RouteObject } from "react-router-dom";

import { Loader } from "@/components/loader";
import { HomePageLazy } from "./lazy/public/home.lazy";
import { LoginPageLazy } from "./lazy/public/login.lazy";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "@/helpers/routes";

export const publicRoutes = (isUserLogged: boolean): RouteObject[] => {
  if (isUserLogged) {
    return [
      {
        path: "*",
        element: <Navigate to={PRIVATE_ROUTES.DASHBOARD} />,
      },
    ];
  }

  return [
    {
      element: <Outlet />,
      children: [
        {
          path: PUBLIC_ROUTES.HOME,
          element: (
            <React.Suspense fallback={<Loader isFloatCenter />}>
              <HomePageLazy />
            </React.Suspense>
          ),
        },
        {
          path: PUBLIC_ROUTES.LOGIN,
          element: (
            <React.Suspense fallback={<Loader isFloatCenter />}>
              <LoginPageLazy />
            </React.Suspense>
          ),
        },
      ],
    },
  ];
};
