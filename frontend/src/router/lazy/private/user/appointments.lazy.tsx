import * as React from "react";

export const AppointmentsPageLazy = React.lazy(() =>
  import("@/pages/private/user/appointments").then((module) => ({
    default: module.AppointmentsPage,
  }))
);
