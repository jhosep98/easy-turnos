import * as React from "react";

export const SpecialistsPageLazy = React.lazy(() =>
  import("@/pages/private/user/specialists").then((module) => ({
    default: module.SpecialistsPage,
  }))
);
