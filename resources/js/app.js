import "./bootstrap";
import "flowbite";

import { createApp } from "vue";
import App from "./components/App.vue";
import router from "./router/index.js";

createApp(App).use(router).mount("#app");
