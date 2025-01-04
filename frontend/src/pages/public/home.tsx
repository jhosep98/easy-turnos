import * as React from "react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";

export const HomePage: React.FC = () => {
  const { t } = useTranslation("home");

  return (
    <div>
      Home Page
      <h1>{t("title")}</h1>
      <hr />
      <Button>Login</Button>
    </div>
  );
};
