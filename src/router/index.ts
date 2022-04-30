import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import HomePage from "../pages/home.vue";
import LearnPage from "../pages/learn.vue";
import TipsPage from "../pages/tips.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/learn",
    name: "learn",
    component: LearnPage,
    meta: { layout: "learn" },
  },
  {
    path: "/tips",
    name: "tips",
    component: TipsPage,
    meta: { layout: "learn" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
