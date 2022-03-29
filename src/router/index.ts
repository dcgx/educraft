import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import HomePage from "../pages/home.vue";
import StartPage from "../pages/start.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/start",
    name: "start",
    component: StartPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
