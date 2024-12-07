import { createI18n } from 'vue-i18n';

// Function to dynamically import and merge all files in a language folder
function loadLocaleMessages() {
  const locales = require.context('../locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const messages = {};

  locales.keys().forEach((key) => {
    // Extract the language code from the folder name (e.g., "en", "es")
    const matched = key.match(/\/([a-zA-Z-]+)\//);
    if (matched && matched[1]) {
      const locale = matched[1];
      if (!messages[locale]) {
        messages[locale] = {};
      }
      // Merge each file into the corresponding locale
      Object.assign(messages[locale], locales(key));
    }
  });

  return messages;
}

// Initialize Vue I18n
const i18n = createI18n({
  locale: 'en',         // Default language
  fallbackLocale: 'en', // Fallback language
  messages: loadLocaleMessages(),
});

export default i18n;
