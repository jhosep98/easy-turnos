import * as React from "react";
import { useTranslation } from "react-i18next";

import { Lang } from "@/types";
import { Button } from "@/components/ui/button";
import { AppContext } from "@/context/app/context";
import { useFindManyCustomersQuery } from "@/providers/hooks/useFindManyCustomers";

export const DashboardUserPage: React.FC = () => {
  const { t } = useTranslation("home");
  const { lang, setLang } = React.useContext(AppContext);
  const { data, isLoading, isError, error } = useFindManyCustomersQuery({
    filters: {
      name: "Leanne Graham",
    },
  });

  const changeLanguage = (lng: Lang) => {
    setLang?.(lng);
  };

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{error.message}</span>;
  }

  return (
    <>
      <h1>DASHBOARD PAGE</h1>
      <h1>{t("title")}</h1>
      <hr />

      <Button onClick={() => changeLanguage("es")}>es</Button>
      <Button onClick={() => changeLanguage("en")}>en</Button>

      <p>language: {lang}</p>

      <hr />

      <ul>
        {data?.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </>
  );
};
