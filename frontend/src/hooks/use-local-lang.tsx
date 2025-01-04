import * as React from "react";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { useLocalStorage } from "@uidotdev/usehooks";

import { Lang } from "@/types";

export const useLocalLang = () => {
  const { i18n } = useTranslation();

  // Language management in navigation
  const userLang = navigator.language.substring(0, 2) as Lang;

  const langLocalStorage = localStorage.getItem("language") as Lang;

  const [lang, setLang] = useLocalStorage<Lang | undefined>(
    "language",
    langLocalStorage ?? userLang
  );

  React.useEffect(() => {
    if (!langLocalStorage) {
      dayjs.locale(userLang);

      i18n.changeLanguage(userLang);
    }
  }, [i18n, langLocalStorage, userLang]);

  React.useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);

      i18n.on(
        "languageChanged",
        (lng) => (document.documentElement.lang = lng)
      );
    }
  }, [i18n, lang]);

  return {
    lang,
    setLang,
  };
};
