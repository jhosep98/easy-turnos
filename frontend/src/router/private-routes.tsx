import * as React from "react";
import { Navigate, RouteObject } from "react-router-dom";

import { RootLayout } from "@/layout/root";
import { Loader } from "@/ui/components/loader";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "@/helpers/routes";
import { DashboardUserPageLazy } from "./lazy/private/user/dashboard.lazy";

export const privateRoutes = (isUserLogged: boolean): RouteObject[] => {
  if (!isUserLogged) {
    return [
      {
        path: "*",
        element: <Navigate to={PUBLIC_ROUTES.HOME} />,
      },
    ];
  }

  return [
    {
      path: PRIVATE_ROUTES.DASHBOARD,
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: (
            <React.Suspense fallback={<Loader isFloatCenter />}>
              <DashboardUserPageLazy />
            </React.Suspense>
          ),
        },
      ],
    },
  ];
};
