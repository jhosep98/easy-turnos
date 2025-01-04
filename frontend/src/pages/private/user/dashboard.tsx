import * as React from "react";
import { useTranslation } from "react-i18next";

import { Lang } from "@/types";
import { Button } from "@/components/ui/button";
import { AppContext } from "@/context/app/context";

export const DashboardUserPage: React.FC = () => {
  const { t } = useTranslation("home");
  const { lang, setLang } = React.useContext(AppContext);

  const changeLanguage = (lng: Lang) => {
    setLang?.(lng);
  };

  return (
    <>
      <h1>DASHBOARD PAGE</h1>
      <h1>{t("title")}</h1>
      <hr />

      <Button onClick={() => changeLanguage("es")}>es</Button>
      <Button onClick={() => changeLanguage("en")}>en</Button>

      <p>language: {lang}</p>
    </>
  );
};
