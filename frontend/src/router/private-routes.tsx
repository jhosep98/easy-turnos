import * as React from "react";
import { Navigate, RouteObject } from "react-router-dom";

import { RootLayout } from "@/layout/root";
import { Loader } from "@/components/loader";
import { HomePage } from "@/pages/private/user/home";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "@/helpers/routes";
import { SettingsPageLazy } from "./lazy/private/user/settings.lazy";
import { CustomersPageLazy } from "./lazy/private/user/customers.lazy";
import { DashboardUserPageLazy } from "./lazy/private/user/dashboard.lazy";
import { SpecialistsPageLazy } from "./lazy/private/user/Specialists.lazy";
import { AppointmentsPageLazy } from "./lazy/private/user/appointments.lazy";

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
      path: PRIVATE_ROUTES.HOME,
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: (
            <React.Suspense fallback={<Loader isFloatCenter />}>
              <HomePage />
            </React.Suspense>
          ),
        },
        {
          index: true,
          path: PRIVATE_ROUTES.DASHBOARD,
          element: (
            <React.Suspense fallback={<Loader isFloatCenter />}>
              <DashboardUserPageLazy />
            </React.Suspense>
          ),
        },
        {
          path: PRIVATE_ROUTES.CUSTOMERS,
          element: (
            <React.Suspense fallback={<Loader isFloatCenter />}>
              <CustomersPageLazy />
            </React.Suspense>
          ),
        },
        {
          path: PRIVATE_ROUTES.SPECIALISTS,
          element: (
            <React.Suspense fallback={<Loader isFloatCenter />}>
              <SpecialistsPageLazy />
            </React.Suspense>
          ),
        },
        {
          path: PRIVATE_ROUTES.APPOINTMENTS,
          element: (
            <React.Suspense fallback={<Loader isFloatCenter />}>
              <AppointmentsPageLazy />
            </React.Suspense>
          ),
        },
        {
          path: PRIVATE_ROUTES.SETTINGS,
          element: (
            <React.Suspense fallback={<Loader isFloatCenter />}>
              <SettingsPageLazy />
            </React.Suspense>
          ),
        },
      ],
    },
  ];
};
