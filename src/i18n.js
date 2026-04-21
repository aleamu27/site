import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLanguage } from './utils/domainConfig';

// English translations
import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enForms from './locales/en/forms.json';

// Norwegian translations
import noCommon from './locales/no/common.json';
import noHome from './locales/no/home.json';
import noForms from './locales/no/forms.json';

const resources = {
  en: {
    common: enCommon,
    home: enHome,
    forms: enForms,
  },
  no: {
    common: noCommon,
    home: noHome,
    forms: noForms,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getLanguage(),
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common', 'home', 'forms'],
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
