import "./bootstrap";
import "flowbite";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./components/App.vue";
import Dashboard from "./components/Dashboard.vue";

// Define routes
const routes = [{ path: "/dashboard", component: Dashboard }];

// Create router instance
const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).mount("#app");
