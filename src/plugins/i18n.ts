import { createI18n } from "vue-i18n";

// Function to dynamically load locale messages
async function loadLocaleMessages(): Promise<Record<string, object>> {
  const locales = import.meta.glob("../locales/*/*.json");
  const messages: Record<string, object> = {};

  for (const path in locales) {
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

// Async i18n setup
export async function setupI18n() {
  const messages = await loadLocaleMessages();
  return createI18n({
    legacy: false,
    globalInjection: true,
    locale: "en",
    fallbackLocale: "en",
    messages,
  });
}
