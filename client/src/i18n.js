import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import translationEN from './assets/locales/en/translation.json';
import translationVN from './assets/locales/vi/translation.json';
import translationJA from './assets/locales/ja/translation.json';

import React from 'react'

// the translations
const resources = {
    en: {
        translation: translationEN
    },
    vi: {
        translation: translationVN
    },
    ja: {
        translation: translationJA
    }
};

i18n
    .use(reactI18nextModule) // passes i18n down to react-i18next
    .init({
        compatibilityJSON: 'v3',
        lng: "en",
        fallbackLng: 'en',
        resources,
        keySeparator: false, // we do not use keys in form messages.welcome
        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },
        react: {
            useSuspense: false,
        }
    });

export default i18n;