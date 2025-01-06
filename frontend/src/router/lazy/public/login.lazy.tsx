import * as React from "react";

export const LoginPageLazy = React.lazy(() =>
  import("@/pages/public/auth/login").then((module) => ({
    default: module.LoginPage,
  }))
);
