import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n';
import { createPinia } from 'pinia';
import './assets/css/app.css'; 

// Import localization messages
import enMessages from './locales/en.json';
import kuMessages from './locales/ku.json';

// Create the i18n instance with the locale messages
const i18n = createI18n({
  legacy: false, // Use Composition API mode
  locale: 'en', // Default locale
  messages: {
    en: enMessages,
    ku: kuMessages,
  },
});

const app = createApp(App);
app.use(i18n);
app.use(createPinia());
app.use(router);
app.mount('#app');
