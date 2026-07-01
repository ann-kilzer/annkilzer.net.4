import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import ja from './locales/ja.json'
import { detectLocale } from './detectLocale'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ja: { translation: ja },
  },
  lng: detectLocale(),
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export default i18n
