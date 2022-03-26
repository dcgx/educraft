import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import HomePage from "../pages/home.vue";
import TopicPage from "../pages/topic.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/:topic",
    name: "topic",
    component: TopicPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
