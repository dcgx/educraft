import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import DefaultLayout from "../layouts/default.vue";

import HomePage from "../pages/home.vue";
import DifficultyPage from "../pages/difficulty.vue";
import CategoryPage from "../pages/category.vue";
import QuizPage from "../pages/quiz.vue";
// import LearnPage from "../pages/learn.vue";
// import TipsPage from "../pages/tips.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: DefaultLayout,
        children: [
            {
                path: "",
                name: "home",
                component: HomePage,
            },
        ],
    },
    {
        path: "/difficulty",
        name: "difficulty",
        component: DifficultyPage,
    },
    {
        path: "/category",
        name: "category",
        component: CategoryPage,
    },
    {
        path: "/quiz",
        name: "quiz",
        component: QuizPage,
    },
    // {
    //     path: "/learn",
    //     name: "learn",
    //     component: LearnPage,
    //     meta: { layout: "learn" },
    // },
    // {
    //     path: "/tips",
    //     name: "tips",
    //     component: TipsPage,
    //     meta: { layout: "learn" },
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
