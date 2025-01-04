import i18n from "i18next";
import HttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    ns: ["home", "common"], // Define your namespaces
    defaultNS: "common", // Fallback namespace
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Correct path for translation files
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
