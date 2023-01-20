import { createApp } from "vue";
import { createPinia } from "pinia";
import { auth } from "@/firebaseConfig";

import App from "./App.vue";
import router from "./router";

import "./index.css";

let app;

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);
    app.use(createPinia());
    app.use(router);
    app.mount("#app");
  }
});
