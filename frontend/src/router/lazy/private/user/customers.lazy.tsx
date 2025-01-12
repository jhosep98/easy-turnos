import * as React from "react";

export const CustomersPageLazy = React.lazy(() =>
  import("@/pages/private/user/customers").then((module) => ({
    default: module.CustomersPage,
  }))
);
