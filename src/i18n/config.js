import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import TRANSLATIONS_EN from "./en";
import TRANSLATIONS_HI_IN from "./hi_IN";
i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: {
      en: {
        translation: TRANSLATIONS_EN
      },
      hi_IN: {
        translation: TRANSLATIONS_HI_IN
      }
    },
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;