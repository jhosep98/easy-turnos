import * as React from "react";

export const SettingsPageLazy = React.lazy(() =>
  import("@/pages/private/user/settings").then((module) => ({
    default: module.SettingsPage,
  }))
);
