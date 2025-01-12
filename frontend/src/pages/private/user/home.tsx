import * as React from "react";
import { Navigate } from "react-router-dom";

import { PRIVATE_ROUTES } from "@/helpers/routes";

export const HomePage: React.FC = () => {
  return <Navigate to={PRIVATE_ROUTES.DASHBOARD} />;
};
