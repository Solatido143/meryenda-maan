import "./bootstrap";
import "flowbite";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./components/App.vue";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";

// Define routes
const routes = [
    { path: "/", component: Home },
    { path: "/login", component: Login },
];

// Create router instance
const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).mount("#app");
