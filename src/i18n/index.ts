import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import ja from './locales/ja.json'
import { initialLocale, storeLocale } from './detectLocale'

const startingLocale = initialLocale()

/** Keep the <html lang> attribute in sync with the active locale. */
function syncHtmlLang(locale: string) {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = locale
  }
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ja: { translation: ja },
  },
  lng: startingLocale,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

syncHtmlLang(startingLocale)

// Persist the user's language choice and keep <html lang> current.
i18n.on('languageChanged', (locale) => {
  storeLocale(locale)
  syncHtmlLang(locale)
})

export default i18n
