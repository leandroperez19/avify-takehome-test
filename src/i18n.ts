import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enLang from "./locales/en.json";
import esLang from "./locales/es.json";

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: "es",
        // lng: "es",
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                ...enLang,
            },
            es: {
                ...esLang,
            },
        },
    });

export default i18n;
