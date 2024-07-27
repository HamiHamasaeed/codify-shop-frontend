// src/i18n.js
import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    home: 'Home',
    shop: 'Shop',
    projects: 'Projects',
    systems: 'Systems',
    about: 'About Us',
    ku: 'Kurdish',
    en: 'English',
  },
  ku: {
    home: 'سەرەکی',
    shop: 'بازاڕ',
    projects: 'پڕۆژەکان',
    systems: 'سیستەمەکان',
    about: 'دەربارە',
    ku: 'کوردی',
    en: 'ئینگلیزی',
  },
};

const i18n = createI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
});

export default i18n;
