import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/scss/app.scss";
import { registerComponent } from "./components";

const app = createApp(App);

registerComponent(app);

app.use(createPinia());
app.use(router);
app.mount("#app");
