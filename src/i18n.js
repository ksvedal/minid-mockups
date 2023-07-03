import i18n from "i18next";
import { initReactI18next } from "react-i18next";


// Importing translation files

import translationEN from "./translations/en/translation.json";
import translationHE from "./translations/no/translation.json";


//Creating object with the variables of imported translation files
const resources = {
    en: {
        translation: translationEN,
    },
    no: {
        translation: translationHE,
    },
};

//i18N Initialization

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng:"no", //default language
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;