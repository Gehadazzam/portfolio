// @/plugins/i18n.ts
import { createI18n } from "vue-i18n";

// Function to dynamically import and merge all files in language folders
async function loadLocaleMessages(): Promise<Record<string, object>> {
  // Updated glob pattern to match files in language folders
  const locales = import.meta.glob("../locales/*/*.json");
  const messages: Record<string, object> = {};

  for (const path in locales) {
    // Extract language code from path (e.g., 'en' from '/locales/en/home.json')
    const matched = path.match(/\/locales\/([^/]+)\//);
    if (matched && matched[1]) {
      const locale = matched[1];
      if (!messages[locale]) {
        messages[locale] = {};
      }
      const module = await locales[path]();
      Object.assign(messages[locale], module.default);
    }
  }

  return messages;
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "en",
  fallbackLocale: "en",
  messages: await loadLocaleMessages(),
});

export default i18n;
