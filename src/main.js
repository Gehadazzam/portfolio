import { createApp } from "vue";
import App from "./App.vue";
import { setupI18n } from "@/plugins/i18n.ts";
import routes from "@/routes/index.ts";

async function init() {
  const i18n = await setupI18n();
  const app = createApp(App);

  app.use(i18n);
  app.use(routes);
  app.mount("#app");
}

init();
