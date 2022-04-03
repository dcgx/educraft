import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

import HomePage from "../pages/home.vue"
import StartPage from "../pages/start.vue"
import TopicPage from "../pages/topic.vue"

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
  {
    path: "/topic/:topicId",
    name: "topic",
    component: TopicPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
