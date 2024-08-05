import { createI18n } from 'vue-i18n';
import enMessages from './locales/en.json';
import kuMessages from './locales/ku.json';

const messages = {
  en: enMessages,
  ku: kuMessages,
};

const i18n = createI18n({
  legacy: false, // Use Composition API mode
  locale: 'en', // Default locale
  fallbackLocale: 'en', // Fallback locale
  messages, // Locale messages
});

export default i18n;