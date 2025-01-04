import * as React from "react";

export const HomePageLazy = React.lazy(() =>
  import("@/pages/public/home").then((module) => ({
    default: module.HomePage,
  }))
);
