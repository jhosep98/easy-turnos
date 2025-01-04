import * as React from "react";
import { Navigate, Outlet, RouteObject } from "react-router-dom";

import { Loader } from "@/ui/components/loader";
import { HomePageLazy } from "./lazy/public/home.lazy";
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
      ],
    },
  ];
};
