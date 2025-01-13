import * as React from "react";

import { AppContext } from "./context";
import { AppContextModel } from "@/types";
import { useLocalLang } from "@/hooks/use-local-lang";
import { useFindMyUserQuery } from "@/providers/hooks/useFindMyUserQuery";

export const AppContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { lang, setLang } = useLocalLang();
  const { data } = useFindMyUserQuery({ userName: "jhose" });

  console.log("!!DATA: ", data);

  const value: AppContextModel = {
    lang,
    setLang,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
