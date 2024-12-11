import { createI18n } from 'vue-i18n';

// Function to dynamically import and merge all files in a language folder
async function loadLocaleMessages(): Promise<Record<string, object>> {
  const locales = import.meta.glob('../locales/[A-Za-z0-9-_,\\s]+\\.json');
  const messages: Record<string, object> = {};

  for (const key in locales) {
    const matched = key.match(/\/([a-zA-Z-]+)\//);
    if (matched && matched[1]) {
      const locale = matched[1];
      if (!messages[locale]) {
        messages[locale] = {};
      }
      const module = await locales[key]();
      Object.assign(messages[locale], module.default);
    }
  }

  return messages;
}

// Initialize Vue I18n
const i18n = createI18n({
  locale: 'en',         // Default language
  fallbackLocale: 'en', // Fallback language
  messages: await loadLocaleMessages(),
});

export default i18n;