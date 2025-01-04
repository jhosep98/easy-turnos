import * as React from "react";

export const DashboardUserPageLazy = React.lazy(() =>
  import("@/pages/private/user/dashboard").then((module) => ({
    default: module.DashboardUserPage,
  }))
);
